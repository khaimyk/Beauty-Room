const bot = require("./botInstanse.js");
const { prisma } = require("../../prisma/prisma-client.js");
const {
  updateUserChatId,
  updateClientChatId,
  notifyAdmins,
} = require("./userServise.js");

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id.toString();
  const username = msg.from.username ? `@${msg.from.username}` : null;

  // Надішли кнопку запиту номера, якщо немає username
  if (!username) {
    return bot.sendMessage(chatId, "📱 Надішліть свій номер телефону:", {
      reply_markup: {
        keyboard: [[{ text: "📱 Надіслати номер", request_contact: true }]],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }

  await handleUserInit(chatId, username);
});
bot.onText(/\/clients|👥 Список клієнтів/, async (msg) => {
  const chatId = msg.chat.id.toString();

  try {
    // Перевіряємо права адміністратора
    const user = await prisma.user.findFirst({
      where: { chatId },
      select: { role: true, branchId: true },
    });
    if (!user || user.role !== "ADMIN") {
      return bot.sendMessage(chatId, "🚫 У вас немає прав для цієї дії.");
    }

    // Отримуємо клієнтів з пагінацією
    const page = 0; // Починаємо з першої сторінки
    const clients = await prisma.client.findMany({
      where: {
        bookings: {
          some: {
            branch: {
              id: user.branchId,
            },
          },
        },
        NOT: { nickName: "" },
      },
      select: {
        name: true,
        phoneNumber: true,
        nickName: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
      skip: page * 10,
      take: 10,
    });

    if (clients.length === 0) {
      return bot.sendMessage(chatId, "ℹ️ Немає зареєстрованих клієнтів.");
    }

    // Форматуємо список клієнтів
    const text = clients
      .map(
        (c, i) =>
          `${i + 1}. 👤 ${c.name || "Без імені"}\n` +
          `📱 ${c.phoneNumber || "-"}\n` +
          `🔖 ${c.nickName || "-"}\n` +
          `🕒 ${c.createdAt.toLocaleString("uk-UA")}`
      )
      .join("\n\n");

    // Кнопка для наступної сторінки

    const nextButton = [
      {
        text: "⬇️ Наступні",
        callback_data: `next_clients_${page + 1}`,
      },
    ];

    await bot.sendMessage(chatId, `📋 Список клієнтів:\n\n${text}`, {
      reply_markup: {
        inline_keyboard: [nextButton],
      },
    });
  } catch (err) {
    console.error("❌ Помилка при отриманні клієнтів:", err);
    bot.sendMessage(
      chatId,
      "❌ Сталася помилка при отриманні списку клієнтів."
    );
  }
});

bot.on("contact", async (msg) => {
  const chatId = msg.chat.id.toString();
  const phoneNumber = msg.contact.phone_number;

  if (!phoneNumber) {
    return bot.sendMessage(chatId, "❗ Не вдалося отримати номер телефону.");
  }

  await handleUserInit(chatId, null, phoneNumber);
});

async function handleUserInit(chatId, username, phoneNumber = null) {
  try {
    let user = await prisma.user.findFirst({
      where: {
        OR: [
          { chatId },
          username ? { nickName: username } : undefined,
          phoneNumber ? { nickName: phoneNumber } : undefined,
        ].filter(Boolean),
      },
    });

    if (user && (username || phoneNumber)) {
      await updateUserChatId(user.id, chatId, username || phoneNumber);
    }

    let roleMessage = "👤 Ваша роль не визначена.";
    let isClient = false;

    let client = null;
    if (!user || user.role === "CLIENT") {
      client = await prisma.client.findFirst({
        where: {
          OR: [
            username ? { nickName: username } : undefined,
            { chatId: chatId },
            phoneNumber ? { nickName: phoneNumber } : undefined,
          ].filter(Boolean),
        },
      });
    }

    if (client) {
      const sameNick =
        client.nickName === chatId || client.nickName === phoneNumber;
      if (!sameNick) {
        const updated = await updateClientChatId(
          client.id,
          chatId,
          username || phoneNumber
        );
        if (updated) {
          isClient = true;
          roleMessage =
            "🎉 Ви успішно зареєстровані як клієнт! Тепер ви будете отримувати сповіщення про ваші записи.";
        } else {
          roleMessage =
            "❌ Не вдалося оновити ваш nickName. Зверніться до адміністратора.";
        }
      } else {
        isClient = true;
        roleMessage = "✅ Ви клієнт. Очікуйте підтвердження записів.";
      }
    } else if (user) {
      switch (user.role) {
        case "CLIENT":
          roleMessage = "✅ Ви клієнт. Очікуйте підтвердження записів.";
          break;
        case "ADMIN":
          roleMessage = "🛠️ Ви адміністратор і отримуватимете всі сповіщення.";
          await bot.sendMessage(chatId, "📋 Оберіть дію:", {
            reply_markup: {
              keyboard: [[{ text: "👥 Список клієнтів" }]],
              resize_keyboard: true,
              one_time_keyboard: false,
            },
          });
          break;
        case "MASTER":
          roleMessage =
            "📅 Ви майстер і отримуватимете сповіщення про бронювання.";
          break;
      }
    } else {
      roleMessage =
        "❌ Ви не зареєстровані як клієнт. Зверніться до адміністратора.";
    }
    await bot.sendMessage(chatId, roleMessage);
    if (isClient) {
      await notifyAdmins(
        bot,
        `🔔 Новий клієнт зареєстрований: ${username || phoneNumber || chatId}`
      );
    }
  } catch (err) {
    console.error("❌ Помилка у команді /start:", err);
    bot.sendMessage(chatId, "❌ Сталася помилка при оновленні chatId.");
  }
}

module.exports = bot;
