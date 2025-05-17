const { prisma } = require("../prisma/prisma-client");

const assignRoles = async () => {
  try {
    const users = await prisma.user.findMany();

    const updatePromises = users.map((user) => {
      const defaultRole = user.email.includes("admin") ? "ADMIN" : "CLIENT";
      return prisma.user.update({
        where: { id: user.id },
        data: { role: defaultRole },
      });
    });

    await Promise.all(updatePromises);
    console.log("Ролі успішно призначено для існуючих користувачів.");
  } catch (error) {
    console.error("Помилка під час призначення ролей:", error);
  } finally {
    await prisma.$disconnect();
  }
};

assignRoles();
