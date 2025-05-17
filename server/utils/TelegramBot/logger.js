const { prisma } = require("../../prisma/prisma-client.js");

// 🔹 Логування повідомлень у БД
const logMessage = async (bookingId, userId, action, message) => {
  try {
    await prisma.bookingLog.create({
      data: {
        bookingId, // Ідентифікатор бронювання
        userId, // Ідентифікатор користувача
        action, // Дія (наприклад, "PENDING")
        timestamp: new Date(), // Час створення запису
      },
    });
    console.log(`✅ Запис логу успішно створено для бронювання ${bookingId}`);
  } catch (err) {
    console.error("❌ Помилка при збереженні повідомлення в БД:", err);
  }
};

module.exports = { logMessage };
