const cron = require("node-cron");
const { prisma } = require("../prisma/prisma-client");
const { sendClientNotification } = require("./TelegramBot/clientNotification");

class ReminderManager {
  constructor() {
    if (!prisma) throw new Error("Prisma client не ініціалізований");
    if (!sendClientNotification)
      throw new Error("sendClientNotification не ініціалізований");
    this.jobs = new Map();
    this.init().catch((err) =>
      console.error("Помилка ініціалізації ReminderManager:", err)
    );
  }

  async init() {
    await this.loadActiveBookings();
    cron.schedule("0 * * * *", () => this.loadActiveBookings());
  }

  async loadActiveBookings() {
    try {
      const now = new Date();
      const bookings = await prisma.booking.findMany({
        where: {
          status: "CONFIRMED",
          date: { gt: now },
        },
        include: {
          client: true,
          services: true,
          user: true,
          branch: true,
        },
      });

      this.syncJobs(bookings);
    } catch (error) {
      console.error("Помилка завантаження активних бронювань:", error);
    }
  }

  // Для автоматичного завантаження активних бронювань
  async setupDefaultReminders(booking) {
    const defaultReminderHours = [6, 12, 24]; // Стандартні нагадування
    const jobs = [];

    for (const hours of defaultReminderHours) {
      const reminderDate = new Date(booking.date);
      reminderDate.setHours(reminderDate.getHours() - hours);

      if (reminderDate > new Date()) {
        const job = await this.createReminderJob(booking, hours, reminderDate);
        jobs.push(job);
      }
    }

    if (jobs.length > 0) {
      this.jobs.set(booking.id, jobs);
    }
  }

  // Для ручного встановлення нагадування (з UI)
  async setupSingleReminder(booking, hoursBefore, client) {
    await this.cancelReminder(booking.id);

    const timeMatch = booking.notes?.match(/(\d{1,2}):(\d{2})/);
    if (!timeMatch) {
      throw new Error("Не вдалося визначити час запису");
    }

    const [_, hoursStr, minutesStr] = timeMatch;
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    // 2. Створюємо копію дати запису
    const bookingDate = new Date(booking.date);

    // 3. Встановлюємо правильний час запису
    bookingDate.setHours(hours, minutes, 0, 0);

    // 4. Перевіряємо чи дата запису в майбутньому
    if (bookingDate <= new Date()) {
      throw new Error("Дата запису вже минула");
    }

    // 5. Розраховуємо час нагадування
    const reminderDate = new Date(bookingDate);
    reminderDate.setHours(reminderDate.getHours() - hoursBefore);

    if (reminderDate <= new Date()) {
      throw new Error(
        `До запису залишилося менше ${hoursBefore} годин. Будь ласка, оберіть менший проміжок часу.`
      );
    }

    console.log(
      `⏰ Встановлення нагадування на ${reminderDate} (за ${hoursBefore} годин до запису)`
    );

    const job = await this.createReminderJob(
      booking,
      hoursBefore,
      reminderDate,
      client
    );
    this.jobs.set(booking.id, [job]);
  }

  // Загальний метод для створення завдання
  async createReminderJob(booking, hoursBefore, reminderDate, client = null) {
    return cron.schedule(
      this.getCronTime(reminderDate),
      async () => {
        try {
          const targetClient = client || booking.client;
          const services = booking.services.map((s) => s.name).join(", ");
          const message = `🔔 Нагадування про запис!\n\nЧерез ${hoursBefore} годин у вас заплановано:\n 🏢 Салон: ${
            booking.branch?.name
          }\n 👤 Майстер: ${
            booking.user?.name
          }\n🛠️ Послуга: ${services}\n📅 Дата: ${
            booking.date.toISOString().split("T")[0]
          }\n🕒 Час: ${booking.notes || "не вказано"}\n ⏳ Тривалість: ${
            booking.time
          } хвилин`;

          await sendClientNotification(targetClient, message);
        } catch (error) {
          console.error("Помилка відправки нагадування:", error);
        }
      },
      { scheduled: true, timezone: "Europe/Warsaw" }
    );
  }

  // Оновлюємо syncJobs
  syncJobs(bookings) {
    this.jobs.forEach((job, bookingId) => {
      if (!bookings.some((b) => b.id === bookingId)) {
        this.cancelReminder(bookingId);
      }
    });

    bookings.forEach((booking) => {
      if (!this.jobs.has(booking.id)) {
        this.setupDefaultReminders(booking); // Використовуємо новий метод
      }
    });
  }

  getCronTime(date) {
    return `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${
      date.getMonth() + 1
    } *`;
  }

  async cancelReminder(bookingId) {
    if (this.jobs.has(bookingId)) {
      this.jobs.get(bookingId).forEach((job) => {
        job.stop();
        console.log("Завдання зупинено");
      });
      this.jobs.delete(bookingId);
    } else {
      console.log("Не знайдено завдань для скасування");
    }
  }
}

module.exports = ReminderManager;
