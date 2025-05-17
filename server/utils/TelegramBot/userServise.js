const { prisma } = require("../../prisma/prisma-client");

const getMasterChatIds = async (userId) => {
  if (!userId) return [];

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { chatId: true },
  });

  return user?.chatId ? [user.chatId] : [];
};
const getBranchAdminChatIds = async (branchId) => {
  if (!branchId) return [];

  const admin = await prisma.user.findFirst({
    where: {
      role: "ADMIN",
      branchId: branchId,
      chatId: { not: null },
    },
    select: { chatId: true },
  });

  return admin?.chatId ? [admin.chatId] : [];
};

const updateUserChatId = async (userId, chatId, username) => {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { chatId: chatId, nickName: username },
    });
    console.log(`✅ chatId ${chatId} оновлено для користувача ${username}`);
  } catch (err) {
    console.error("❌ Помилка при оновленні chatId:", err);
    throw err;
  }
};
const notifyAdmins = async (bot, message) => {
  const admins = await prisma.user.findMany({
    where: { role: "ADMIN", chatId: { not: null } },
    select: { chatId: true },
  });

  for (const admin of admins) {
    await bot.sendMessage(admin.chatId, message);
  }
};
const updateClientChatId = async (clientId, chatId, usernameOrPhone) => {
  try {
    if (!clientId || !chatId || !usernameOrPhone) {
      console.error(
        "❌ Відсутній clientId, chatId або username для оновлення."
      );
      return false;
    }

    const existingClient = await prisma.client.findFirst({
      where: {
        chatId: chatId.toString(),
        id: { not: clientId },
      },
    });

    if (existingClient) {
      console.error(`❌ chatId ${chatId} вже використовується іншим клієнтом.`);
      return false;
    }

    await prisma.client.update({
      where: { id: clientId },
      data: { chatId: chatId },
    });

    console.log(`✅ chatId ${chatId} оновлено для клієнта ${usernameOrPhone}`);
    return true;
  } catch (err) {
    console.error("❌ Помилка при оновленні chatId клієнта:", err);
    return false;
  }
};

const getClientChatIds = async (clientId, nickName) => {
  try {
    if (!clientId && !nickName) {
      console.error(
        "❌ clientId або nickName обов’язкові для getClientChatIds"
      );
      return [];
    }

    const client = await prisma.client.findFirst({
      where: {
        OR: [
          clientId ? { id: clientId } : undefined,
          nickName ? { nickName } : undefined,
        ].filter(Boolean),
      },
    });

    if (!client || !client.chatId) return [];
    return [client.chatId];
  } catch (err) {
    console.error("❌ Помилка при отриманні chatId клієнта:", err);
    return [];
  }
};
const handleClientPagination = async (bot, query) => {
  const chatId = query.message.chat.id.toString();
  const data = query.data;
  const match = data.match(/(?:next_clients_|clients_page_)(\d+)/);
  const page = match ? parseInt(match[1], 10) : 0;

  const user = await prisma.user.findFirst({
    where: { chatId },
    select: { id: true, branchId: true },
  });

  const clients = await prisma.client.findMany({
    where: {
      bookings: {
        some: {
          branch: {
            adminId: user.id,
          },
        },
      },
      NOT: { nickName: "" },
    },
    orderBy: { createdAt: "desc" },
    skip: page * 10,
    take: 10,
  });

  const text = clients
    .map(
      (c, i) =>
        `${i + 1 + page * 10}. 👤 ${c.name || "Без імені"}\n` +
        `📱 ${c.phoneNumber || "-"}\n` +
        `🔖 ${c.nickName || "-"}\n` +
        `🕒 ${c.createdAt.toLocaleString("uk-UA")}`
    )
    .join("\n\n");

  const buttons = [];
  if (page > 0)
    buttons.push({
      text: "⬆️ Назад",
      callback_data: `clients_page_${page - 1}`,
    });
  if (clients.length === 10)
    buttons.push({
      text: "⬇️ Наступні",
      callback_data: `clients_page_${page + 1}`,
    });

  await bot.editMessageText(`📋 Список клієнтів:\n\n${text}`, {
    chat_id: chatId,
    message_id: query.message.message_id,
    reply_markup: { inline_keyboard: [buttons] },
  });
};

module.exports = {
  getBranchAdminChatIds,
  updateUserChatId,
  getMasterChatIds,
  getClientChatIds,
  updateClientChatId,
  notifyAdmins,
  handleClientPagination,
};
