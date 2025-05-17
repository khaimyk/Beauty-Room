const PrismaClient = require("../src/generated/client").PrismaClient;

const prisma = new PrismaClient();

module.exports = {
  prisma,
};
