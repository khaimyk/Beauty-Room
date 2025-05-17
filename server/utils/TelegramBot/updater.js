const bot = require("./telegramBot");
const { prisma } = require("../../prisma/prisma-client");

const getUpdatedText = (booking, status = "CONFIRMED") => {
  return `${
    status === "CONFIRMED"
      ? "✅ Підтверджено бронювання"
      : "❌ Скасовано бронювання"
  }:
👤 Клієнт: ${booking.client?.name || "Невідомо"} 
🛠️ Послуга: ${booking.services.map((s) => s.name).join(", ")}
📅 Дата: ${booking.date.toISOString().split("T")[0]}
🕒 Час: ${booking.notes || "немає"}
⏳ Тривалість: ${booking.time} хвилин`;
};

const updateBookingMessages = async (booking, status) => {
  const full = await prisma.booking.findUnique({
    where: { id: booking.id },
    include: {
      services: true,
      client: true,
      user: true,
    },
  });

  const messages = await prisma.bookingMessage.findMany({
    where: { bookingId: booking.id },
  });

  const text = getUpdatedText(full, status);

  for (const msg of messages) {
    try {
      await bot.editMessageText(text, {
        chat_id: msg.chatId,
        message_id: msg.messageId,
      });
    } catch (err) {
      console.warn(`Не вдалося оновити повідомлення:`, err);
    }
  }
};

module.exports = { updateBookingMessages };
