const bot = require("./telegramBot");
const { sendEmail, scheduleEmailReminder } = require("../sendEmail");
const { getClientChatIds } = require("./userServise");

async function sendClientNotification(
  client,
  message,
  messageHTML,
  options = {},
  booking = null
) {
  const { chatId, nickName } = client;

  // 1️⃣ Основний пріоритет: Telegram chatId
  if (chatId && !isNaN(chatId)) {
    try {
      await bot.sendMessage(chatId, message, options);
      return;
    } catch (err) {
      console.error(
        `❌ Помилка при надсиланні повідомлення на chatId ${chatId}:`,
        err
      );
    }
  }

  // 2️⃣ Email fallback
  if (nickName?.includes("@") && !nickName.startsWith("@")) {
    console.log(`📧 Надсилання email на адресу: ${nickName}`);
    await sendEmail(nickName, "Сповіщення про бронювання", messageHTML, true);
    if (booking) await scheduleEmailReminder(client, booking);
    return;
  }

  // 3️⃣ Telegram username fallback
  if (nickName?.startsWith("@")) {
    const clientChatIds = (await getClientChatIds(client.id, nickName)) || [];

    if (!clientChatIds.length) {
      console.error(
        `❌ Не знайдено жодного chatId для користувача: ${nickName}`
      );
      return;
    }

    for (const id of clientChatIds) {
      if (isNaN(id)) {
        console.error(`❌ Некоректний chatId: ${id}, не надсилаємо.`);
        continue;
      }
      try {
        await bot.sendMessage(id, message, options);
      } catch (err) {
        console.error(
          `❌ Помилка при надсиланні повідомлення chatId ${id}:`,
          err
        );
      }
    }
    return;
  }

  // 4️⃣ Невідомий формат
  console.error(`❌ Невідомий формат nickName: ${nickName}`);
}

module.exports = { sendClientNotification };
