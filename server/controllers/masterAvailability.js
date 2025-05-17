const Joi = require("joi");
const { prisma } = require("../prisma/prisma-client.js");
const { ERRORS } = require("../utils/constants");

// Validation schema
const slotSchema = Joi.object({
  startTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
});

const availabilitySchema = Joi.array().items(
  Joi.object({
    date: Joi.string().isoDate().required(),
    slots: Joi.array().items(slotSchema),
  })
);

const saveAvailability = async (req, res) => {
  try {
    const { availability, userId: bodyUserId } = req.body;
    const requesterId = req.user?.id;
    const role = req.user?.role;

    if (!requesterId || !role) {
      return res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
    }

    const targetUserId = role === "ADMIN" ? bodyUserId : requesterId;

    if (role !== "ADMIN" && requesterId !== targetUserId) {
      return res.status(403).json({ message: "Доступ заборонено" });
    }

    if (!targetUserId) {
      return res.status(400).json({ message: "Не вказано користувача" });
    }

    const { error } = availabilitySchema.validate(availability);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existingAvailability = await prisma.masterAvailability.findUnique({
      where: { userId: targetUserId },
    });
    const user = await prisma.user.findUnique({
      where: { id: targetUserId },
    });
    if (!user) {
      return res.status(404).json({ message: "Користувача не знайдено" });
    }
    if (user.role !== "MASTER") {
      return res.status(400).json({
        message: "Графік можна створити лише для користувача з роллю 'MASTER'",
      });
    }

    const data = {
      availability: JSON.stringify(availability),
      userId: targetUserId,
    };

    const result = existingAvailability
      ? await prisma.masterAvailability.update({
          where: { userId: targetUserId },
          data,
        })
      : await prisma.masterAvailability.create({ data });

    res.status(existingAvailability ? 200 : 201).json({
      message: "Доступність успішно збережена",
      data: result,
    });
  } catch (error) {
    console.error("Помилка збереження доступності:", error);
    res.status(500).json({ message: ERRORS.ACCESS_DENIED });
  }
};

const getMasterAvailability = async (req, res) => {
  try {
    const userId = req.params.id;

    const availability = await prisma.masterAvailability.findUnique({
      where: { userId },
      include: {
        user: { select: { id: true, name: true, role: true } },
      },
    });

    if (!availability) {
      return res.status(404).json({ message: "Доступність не знайдено" });
    }

    let parsedAvailability;
    try {
      parsedAvailability = JSON.parse(availability.availability);
    } catch {
      parsedAvailability = availability.availability;
    }

    res.status(200).json({
      ...availability,
      availability: parsedAvailability,
    });
  } catch (error) {
    console.error("Помилка отримання доступності:", error);
    res.status(500).json({ message: "Помилка сервера" });
  }
};

const getAllMastersAvailability = async (req, res, next) => {
  try {
    const { branchId } = req.query;
    const availabilities = await prisma.masterAvailability.findMany({
      where: branchId
        ? {
            user: {
              branchId: {
                equals: branchId,
              },
            },
          }
        : {},
      include: {
        user: { select: { id: true, name: true, role: true } },
      },
    });

    if (!availabilities) {
      return res.status(404).json({ message: ERRORS.AVAILABILITY_NOT_FOUND });
    }

    res.status(200).json(
      availabilities.map((availability) => ({
        ...availability,
        availability: JSON.parse(availability.availability),
      }))
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  saveAvailability,
  getMasterAvailability,
  getAllMastersAvailability,
};
