const bot = require("./telegramBot.js");
const { logMessage } = require("./logger.js");
const {
  getBranchAdminChatIds,
  getMasterChatIds,
  handleClientPagination,
} = require("./userServise.js");
const { prisma } = require("../../prisma/prisma-client.js");
const { sendClientNotification } = require("./clientNotification.js");
const { handleReminderChoice, handleSetReminder } = require("./Reminder.js");
const { updateBookingMessages } = require("./updater.js");

const sendBookingNotification = async (booking) => {
  const adminChatIds = await getBranchAdminChatIds(booking.branchId);

  const masterChatIds = booking.userId
    ? await getMasterChatIds(booking.userId)
    : [];

  const chatIds = [...new Set([...adminChatIds, ...masterChatIds])];

  if (chatIds.length === 0) {
    return console.error(
      "❌ Не знайдено chatId для майстрів чи адміністраторів."
    );
  }

  const services =
    booking.services?.map((s) => s.name).join(", ") || "Невідомо";
  const formattedId = booking.id;

  const message = `🎉 Новий запис!
👤 Клієнт: ${booking.client?.name || "Невідомо"}
🛠️ Послуга: ${services}
📅 Дата: ${booking.date.toISOString().split("T")[0]}
🕒 Година: ${booking.notes || "немає"}
⏳ Тривалість: ${booking.time} хвилин`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Підтвердити", callback_data: `confirm_${formattedId}` },
          { text: "❌ Скасувати", callback_data: `cancel_${formattedId}` },
        ],
      ],
    },
  };

  for (const chatId of chatIds) {
    try {
      const sentMessage = await bot.sendMessage(chatId, message, options);

      await prisma.bookingMessage.create({
        data: {
          bookingId: booking.id,
          chatId: chatId.toString(),
          messageId: sentMessage.message_id,
        },
      });

      if (!booking.id || !booking.userId) {
        console.error(
          "❌ Бронювання не містить обов'язкових полей: id або userId"
        );
        return;
      }
      await logMessage(booking.id, booking.userId, "PENDING");
    } catch (err) {
      console.error(`❌ Помилка при відправці повідомлення ${chatId}:`, err);
    }
  }
};

bot.on("callback_query", async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id.toString();
  const data = callbackQuery.data;
  if (data.startsWith("clients_page_") || data.startsWith("next_clients_")) {
    await handleClientPagination(bot, callbackQuery);
    return;
  }
  try {
    // Швидка відповідь Telegram
    await bot.answerCallbackQuery(callbackQuery.id, { text: "⏳ Обробка..." });

    const parts = data.split("_");
    let action = parts[0];
    let subAction = parts[1];
    let bookingId = "";

    // Спеціальна обробка для set_reminder
    if (action === "set" && subAction === "reminder") {
      action = "set_reminder";
      bookingId = parts.slice(2).join("_");
    } else if (action === "reminder") {
      bookingId = parts.slice(2).join("_"); // Для reminder_6_id беремо частини після другого _
    } else {
      bookingId = parts.slice(1).join("_"); // Для confirm_id, cancel_id
    }

    console.log(
      `Debug: action=${action}, subAction=${subAction}, bookingId=${bookingId}, chatId=${chatId}`
    );

    const existingBooking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });
    if (!existingBooking) {
      console.error("❌ Бронювання не знайдено для ID:", bookingId);
      return bot.answerCallbackQuery(callbackQuery.id, {
        text: `❌ Бронювання не знайдено!!!.`,
      });
    }

    try {
      const serviceExists = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: {
          services: { select: { name: true } },
          client: { select: { name: true, nickName: true } },
          user: { select: { name: true } },
          branch: { select: { name: true } },
        },
      });
      const services =
        serviceExists?.services?.map((s) => s.name).join(", ") || "Невідомо";
      const client = serviceExists?.client;
      const master = serviceExists?.user;
      const branch = serviceExists?.branch;

      if (action === "confirm") {
        await prisma.booking.update({
          where: { id: bookingId },
          data: { status: "CONFIRMED" },
        });
        await prisma.bookingLog.create({
          data: {
            bookingId: bookingId,
            userId: existingBooking.userId,
            action: "CONFIRMED",
          },
        });
        await updateBookingMessages(existingBooking, "CONFIRMED");
        const clientBookingHtml = `
  <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9fafb; color: #111;">
    <h2 style="color: #10b981;">🇺🇦✅ Бронювання підтверджено / 🇬🇧✅ Booking Confirmed / 🇵🇱✅ Rezerwacja potwierdzona</h2>

    <table style="font-size: 15px; margin-top: 16px; line-height: 1.6;">
      <tr>
        <td>👤</td>
        <td>
          🇺🇦 <strong>Майстер:</strong> ${master?.name}<br />
          🇬🇧 <strong>Master:</strong> ${master?.name}<br />
         🇵🇱 <strong>Fryzjer:</strong> ${master?.name}
        </td>
      </tr>
      <tr>
        <td>🛠️</td>
        <td>
         🇺🇦 <strong>Послуга:</strong> ${services}<br />
          🇬🇧 <strong>Service:</strong> ${services}<br />
         🇵🇱 <strong>Usługa:</strong> ${services}
        </td>
      </tr>
      <tr>
        <td>📅</td>
        <td>
          🇺🇦 <strong>Дата:</strong> ${
            existingBooking.date.toISOString().split("T")[0]
          }<br />
          🇬🇧 <strong>Date:</strong> ${
            existingBooking.date.toISOString().split("T")[0]
          }<br />
         🇵🇱 <strong>Data:</strong> ${
           existingBooking.date.toISOString().split("T")[0]
         }
        </td>
      </tr>
      <tr>
        <td>🕒</td>
        <td>
         🇺🇦 <strong>Година:</strong> ${existingBooking.notes}<br />
          🇬🇧 <strong>Time:</strong> ${existingBooking.notes}<br />
         🇵🇱 <strong>Godzina:</strong> ${existingBooking.notes}
        </td>
      </tr>
      <tr>
        <td>⏳</td>
        <td>
        🇺🇦 <strong>Тривалість:</strong> ${existingBooking.time} хв<br />
          🇬🇧 <strong>Duration:</strong> ${existingBooking.time} min<br />
         🇵🇱 <strong>Czas trwania:</strong> ${existingBooking.time} min
        </td>
      </tr>
    </table>

    <p style="margin-top: 24px; font-size: 14px; color: #6b7280;">
     🇺🇦 Дякуємо за вибір <strong>${branch?.name}</strong>!<br />
      🇬🇧 Thank you for choosing <strong>${branch?.name}</strong>!<br />
     🇵🇱 Dziękujemy za wybór <strong>${branch?.name}</strong>!
    </p>

    <p style="margin-top: 32px;">🇺🇦 З нетерпінням чекаємо зустрічі! / 🇬🇧 See you soon! / 🇵🇱 Do zobaczenia! 💅</p>
  </div>
`;

        const clientMessage = `✅ Ваше бронювання підтверджено!
🏢 Салон: ${branch?.name || "Невідомо"}
👤 Майстер: ${master?.name || "Невідомо"} 
🛠️ Послуга: ${services}
📅 Дата: ${existingBooking.date.toISOString().split("T")[0]}
🕒 Час: ${existingBooking.notes || "немає"}
⏳ Тривалість: ${existingBooking.time} хвилин`;

        const options = {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "⏰ Нагадування",
                  callback_data: `set_reminder_${bookingId}`,
                },
              ],
            ],
          },
        };

        await sendClientNotification(
          client,
          clientMessage,
          clientBookingHtml,
          options,
          serviceExists
        );
        bot.editMessageText(
          `✅ Бронювання підтверджено.
👤 Клієнт: ${client?.name || "Невідомо"} 
🛠️ Послуга: ${services}
📅 Дата: ${existingBooking.date.toISOString().split("T")[0]}
🕒 Година: ${existingBooking.notes || "немає"}
⏳ Тривалість: ${existingBooking.time} хвилин`,
          {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
          }
        );
      } else if (action === "cancel") {
        await prisma.booking.update({
          where: { id: bookingId },
          data: { status: "CANCELLED" },
        });
        await prisma.bookingLog.create({
          data: {
            bookingId: bookingId,
            userId: existingBooking.userId,
            action: "CANCELLED",
          },
        });
        await updateBookingMessages(existingBooking, "CANCELLED");
        const clientMessage = `❌ Ваше бронювання скасовано.
🏢 Салон: ${branch?.name || "Невідомо"}
👤 Майстер: ${master?.name || "Невідомо"} 
🛠️ Послуга: ${services}
📅 Дата: ${existingBooking.date.toISOString().split("T")[0]}
🕒 Час: ${existingBooking.notes || "немає"}
⏳ Тривалість: ${existingBooking.time} хвилин`;

        // Надсилання сповіщення клієнту
        await sendClientNotification(client, clientMessage);

        bot.editMessageText(
          `❌ Бронювання скасовано.
👤 Клієнт: ${client?.name || "Невідомо"} 
🛠️ Послуга: ${services}
📅 Дата: ${existingBooking.date.toISOString().split("T")[0]}
🕒 Година: ${existingBooking.notes || "немає"}
⏳ Тривалість: ${existingBooking.time} хвилин`,
          {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
          }
        );
      } else if (action === "set_reminder") {
        // Обробка кнопки "Нагадування"
        await handleSetReminder(chatId, bookingId);
      } else if (action === "reminder") {
        // Обробка вибору часу нагадування
        await handleReminderChoice(chatId, callbackQuery, subAction, bookingId);
      }
    } catch (error) {
      console.error("Помилка обробки callback:", error);

      if (error.response?.body?.description?.includes("query is too old")) {
        console.log("Callback query прострочено, ігноруємо...");
        return;
      }

      try {
        await bot.answerCallbackQuery(callbackQuery.id, {
          text: "❌ Сталася помилка",
          show_alert: true,
        });
      } catch (err) {
        console.error("Не вдалося відправити повідомлення про помилку:", err);
      }
    }
  } catch (error) {
    console.error("Помилка обробки callback:", error);
  }
});

module.exports = { sendBookingNotification };
