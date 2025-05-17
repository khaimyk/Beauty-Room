const bot = require("./telegramBot");
const { prisma } = require("../../prisma/prisma-client");
const ReminderManager = require("../ReminderScheduler");

const reminderManager = new ReminderManager();

async function handleSetReminder(chatId, bookingId) {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { client: true, services: true },
    });

    if (!booking) {
      return await bot.sendMessage(chatId, "❌ Бронювання не знайдено");
    }

    await bot.sendMessage(chatId, "Оберіть час нагадування:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "6 годин", callback_data: `reminder_6_${bookingId}` },
            { text: "12 годин", callback_data: `reminder_12_${bookingId}` },
          ],
          [
            { text: "24 години", callback_data: `reminder_24_${bookingId}` },
            { text: "Вимкнути", callback_data: `reminder_off_${bookingId}` },
          ],
        ],
      },
    });
  } catch (error) {
    console.error("Помилка при обробці нагадування:", error);
    await bot.sendMessage(
      chatId,
      "❌ Сталася помилка при налаштуванні нагадування"
    );
  }
}

async function handleReminderChoice(
  chatId,
  callbackQuery,
  subAction,
  bookingId
) {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { client: true, services: true, user: true, branch: true }, // Додаємо include для повної інформації
    });

    if (!booking) {
      console.error("Бронювання не знайдено:", bookingId);
      return await bot.answerCallbackQuery(callbackQuery.id, {
        text: "❌ Бронювання не знайдено",
      });
    }

    if (!reminderManager) {
      console.error("ReminderManager не ініціалізований");
      return await bot.answerCallbackQuery(callbackQuery.id, {
        text: "❌ Помилка системи нагадувань",
      });
    }

    if (subAction === "off") {
      await reminderManager.cancelReminder(bookingId);
      try {
        await bot.deleteMessage(chatId, callbackQuery.message.message_id);
        await bot.deleteMessage(chatId, callbackQuery.message.message_id - 1);
      } catch (deleteError) {
        console.error("Не вдалося видалити повідомлення:", deleteError);
      }
      const confirmationMessage = `🔕 Нагадування вимкнено для бронювання:
🏢 Салон: ${booking.branch?.name || "Невідомо"}
👤 Майстер: ${booking.user?.name || "Невідомо"}
🛠️ Послуга: ${booking.services?.map((s) => s.name).join(", ") || "Невідомо"}
📅 Дата: ${booking.date.toISOString().split("T")[0]}
🕒 Час: ${booking.notes || "немає"}
⏳ Тривалість: ${booking.time} хвилин`;

      await bot.sendMessage(chatId, confirmationMessage);
      return await bot.answerCallbackQuery(callbackQuery.id, {
        text: "🔕 Нагадування вимкнено",
      });
    }

    const hours = parseInt(subAction);
    if (isNaN(hours)) {
      console.error("❌ Некоректне значення годин:", subAction);
      return await bot.answerCallbackQuery(callbackQuery.id, {
        text: "❌ Помилка: некоректний час",
      });
    }

    try {
      await reminderManager.setupSingleReminder(booking, hours, booking.client);
    } catch (error) {
      console.error("Помилка встановлення нагадування:", error);

      // Відправляємо повідомлення про помилку клієнту
      const errorMessage = `❌ Не вдалося встановити нагадування:
${error.message}`;

      await bot.sendMessage(chatId, errorMessage);
      return await bot.answerCallbackQuery(callbackQuery.id, {
        text: `Не вдалося встановити нагадування`,
      });
    }

    try {
      await bot.deleteMessage(chatId, callbackQuery.message.message_id);
      await bot.deleteMessage(chatId, callbackQuery.message.message_id - 1);
    } catch (deleteError) {
      console.error("Не вдалося видалити повідомлення:", deleteError);
    }

    // Відправляємо нове повідомлення без кнопки
    const confirmationMessage = `✅ Бронювання підтверджено
🏢 Салон: ${booking.branch?.name || "Невідомо"}
👤 Майстер: ${booking.user?.name || "Невідомо"}
🛠️ Послуга: ${booking.services?.map((s) => s.name).join(", ") || "Невідомо"}
📅 Дата: ${booking.date.toISOString().split("T")[0]}
🕒 Час: ${booking.notes || "немає"}
⏳ Тривалість: ${booking.time} хвилин
⏰ Нагадування встановлено за ${hours} годин до запису`;

    await bot.sendMessage(chatId, confirmationMessage);
  } catch (error) {
    console.error("Помилка обробки нагадування:", error);
    try {
      await bot.answerCallbackQuery(callbackQuery.id, {
        text: "❌ Помилка сервера",
      });
    } catch (e) {
      console.error("Не вдалося відправити помилку в Telegram:", e);
    }
  }
}

module.exports = { handleSetReminder, handleReminderChoice };
