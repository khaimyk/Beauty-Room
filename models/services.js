const { prisma } = require("../prisma/prisma-client.js");

const getAllServices = async (page, limit) => {
  const skip = (page - 1) * limit;
  const [services, total] = await Promise.all([
    prisma.service.findMany({ skip, take: limit }),
    prisma.service.count(),
  ]);
  return { services, total };
};

const getServiceById = async (id) => {
  return await prisma.service.findUnique({ where: { id } });
};

const createService = async (data) => {
  return await prisma.service.create({ data });
};

const updateService = async (id, data) => {
  return await prisma.service.update({ where: { id }, data });
};

const deleteService = async (id) => {
  return await prisma.service.delete({ where: { id } });
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
