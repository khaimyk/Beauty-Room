const { prisma } = require("../prisma/prisma-client");

/**
 * Отримує display-username для сайту по Telegram ID
 * @param {string} telegramId - Telegram ID клієнта
 * @returns {Promise<string|null>} - username / phone / email / null
 */
async function getDisplayUsernameByTelegramId(telegramId) {
  if (!telegramId) return null;

  const client = await prisma.client.findFirst({
    where: { nickName: telegramId },
  });

  if (!client) return null;

  const { nickName } = client;

  if (!nickName) return null;

  // Якщо username з @
  if (nickName.startsWith("@")) return nickName;

  // Якщо виглядає як телефон (починається з + або 0)
  if (/^\+?\d{10,15}$/.test(nickName)) return nickName;

  // Якщо email
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nickName)) return nickName;

  // Якщо це Telegram ID → шукаємо пов'язане значення
  if (/^\d+$/.test(nickName)) {
    // пробуємо знайти клієнта з цим chatId (вказаним як nickName)
    const aliasClient = await prisma.client.findFirst({
      where: { nickName: nickName },
    });

    if (aliasClient?.nickName?.startsWith("@")) return aliasClient.nickName;

    if (/^\+?\d{10,15}$/.test(aliasClient?.nickName))
      return aliasClient.nickName;
  }

  return null;
}

module.exports = { getDisplayUsernameByTelegramId };
