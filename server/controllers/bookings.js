const { prisma } = require("../prisma/prisma-client.js");
const Joi = require("joi");
const {
  sendBookingNotification,
} = require("../utils/TelegramBot/notificationService.js");
const { ERRORS } = require("../utils/constants.js");
const { updateBookingMessages } = require("../utils/TelegramBot/updater.js");

// Validation schema for Booking
const bookingSchema = Joi.object({
  userId: Joi.string().required().messages({
    "any.required": ERRORS.USER_REQUIRED,
  }),
  serviceId: Joi.array().items(Joi.string()).required().messages({
    "any.required": ERRORS.SERVICE_REQUIRED,
  }),
  clientId: Joi.string().required().messages({
    "any.required": ERRORS.CLIENT_REQUIRED,
  }),
  date: Joi.string().isoDate().required(),
  notes: Joi.string().optional(),
  time: Joi.string().optional(),
});
const bookingUpdateSchema = Joi.object({
  userId: Joi.string().optional(),
  serviceId: Joi.string().optional(),
  clientId: Joi.string().optional(),
  date: Joi.string().isoDate().required(),
  notes: Joi.string().optional(),
  time: Joi.string().optional(),
});

// Middleware for validating input data
const validateInput = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

/**
 * @route  GET /api/bookings
 * @desc   Get all bookings with optional pagination and filtering by userId
 * @access Private
 */
const all = async (req, res, next) => {
  try {
    const { branchId } = req.query;
    const bookings = await prisma.booking.findMany({
      where: branchId
        ? {
            user: {
              branchId,
            },
          }
        : undefined,
      include: {
        user: { select: { id: true, name: true } },
        services: {
          select: {
            id: true,
            name: true,
            duration: true,
            price: true,
            currency: true,
          },
        },
        client: {
          select: { id: true, name: true },
        },
      },
    });

    return res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};

/**
 * @route GET /api/bookings/user/:userId
 * @desc Get a booking by userId
 * @access Private
 */

const getBookingByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
    }
    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        user: { select: { id: true, name: true } },
        services: {
          select: {
            id: true,
            name: true,
            duration: true,
            price: true,
            currency: true,
          },
        },
        client: { select: { id: true, name: true } },
      },
    });
    return res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};

/**
 * @route GET /api/bookings/:id
 * @desc Get a booking by ID
 * @access Private
 */
const getBooking = async (req, res, next) => {
  try {
    const booking = await prisma.booking.findUnique({
      where: { id: req.params.id },
      include: {
        user: { select: { id: true, name: true } },
        services: { select: { id: true, name: true } },
        client: { select: { id: true, name: true } },
      },
    });
    if (!booking) {
      return res.status(404).json({ message: ERRORS.BOOKING_NOT_FOUND });
    }
    return res.json(booking);
  } catch (err) {
    console.error("Error fetching booking:", err);
    next(err);
  }
};

/**
 * @route POST /api/bookings/add
 * @desc Create a new booking
 * @access Private
 */

const add = async (req, res, next) => {
  const { userId, serviceId, date, notes, time, clientId, branchId } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, branchId: true },
    });
    if (!user) return res.status(400).json({ message: ERRORS.USER_NOT_FOUND });

    const newBooking = await prisma.booking.create({
      data: {
        date,
        client: { connect: { id: clientId } },
        services: { connect: serviceId.map((id) => ({ id })) },
        user: { connect: { id: userId } },
        notes,
        time,
        branch: { connect: { id: user.branchId } },
        status: "PENDING",
      },
      include: {
        user: { select: { id: true, name: true } },
        services: { select: { id: true, name: true } },
        client: { select: { id: true, name: true, nickName: true } },
        branch: { select: { id: true, name: true, address: true } },
      },
    });

    sendBookingNotification(newBooking);

    return res.status(201).json({
      success: true,
      data: newBooking,
      message: "Бронювання створено успішно",
    });
  } catch (err) {
    console.error("Помилка створення бронювання:", err);
    next(err);
  }
};

/**
 * @route PUT /api/bookings/edit/:id
 * @desc Update a booking
 * @access Private
 */
const edit = async (req, res, next) => {
  const { userId, serviceId, date, notes, time, branchId } = req.body;
  try {
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!userExists) {
      return res.status(400).json({ message: ERRORS.USER_NOT_FOUND });
    }

    // Check if the service exists
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!serviceExists) {
      return res.status(400).json({ message: ERRORS.SERVICE_NOT_FOUND });
    }
    const existingBooking = await prisma.booking.findUnique({
      where: { id: req.params.id },
    });
    if (!existingBooking) {
      return res.status(404).json({ message: ERRORS.BOOKING_NOT_FOUND });
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: req.params.id },
      data: {
        date,
        services: { connect: serviceId.map((id) => ({ id })) },
        user: {
          connect: { id: userId }, // Підключення існуючої послуги
        },
        client: {
          connect: { id: clientId },
        },
        notes,
        time,
        branch: { connect: { id: branchId } },
      },
      include: {
        user: { select: { id: true, name: true } },
        service: { select: { id: true, name: true } },
        client: { select: { id: true, name: true } },
        branch: { select: { id: true, name: true } },
      },
    });
    return res.json(updatedBooking);
  } catch (err) {
    console.error("Error updating booking:", err);
    next(err);
  }
};

/**
 * @route DELETE /api/bookings/remove/:id
 * @desc Delete a booking
 * @access Private
 */
const remove = async (req, res, next) => {
  try {
    const existingBooking = await prisma.booking.findUnique({
      where: { id: req.params.id },
    });
    if (!existingBooking) {
      return res.status(404).json({ message: ERRORS.BOOKING_NOT_FOUND });
    }

    await prisma.booking.delete({ where: { id: req.params.id } });
    return res.status(204).send(); // No Content
  } catch (err) {
    console.error("Error deleting booking:", err);
    next(err);
  }
};

/**
 * @route PUT /api/bookings/confirm/:id
 * @desc Майстер підтверджує бронювання
 * @access Private (тільки для майстра)
 */
const confirmBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await prisma.booking.update({
      where: { id },
      data: { status: "CONFIRMED" },
    });

    await prisma.bookingLog.create({
      data: {
        bookingId: id,
        userId: booking.userId,
        action: "CONFIRMED",
      },
    });
    await updateBookingMessages(booking, "CONFIRMED");
    return res.json({ message: "Бронювання підтверджено", data: booking });
  } catch (err) {
    console.error("Помилка підтвердження бронювання:", err);
    next(err);
  }
};

/**
 * @route PUT /api/bookings/cancel/:id
 * @desc Майстер скасує бронювання
 * @access Private (тільки для майстра)
 * */
const cancelBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await prisma.booking.update({
      where: { id },
      data: { status: "CANCELLED" },
    });

    await prisma.bookingLog.create({
      data: {
        bookingId: id,
        userId: booking.userId,
        action: "CANCELLED",
      },
    });
    await updateBookingMessages(booking, "CANCELLED");
    return res.json({ message: "Бронювання скасовано", data: booking });
  } catch (err) {
    console.error("Помилка скасування бронювання:", err);
    next(err);
  }
};

const getBookingLogs = async (req, res, next) => {
  try {
    const logs = await prisma.bookingLog.findMany({
      where: { bookingId: req.params.id },
      orderBy: { timestamp: "desc" },
      include: { user: { select: { name: true } } },
    });

    return res.json(logs);
  } catch (err) {
    console.error("Помилка отримання логів бронювання:", err);
    next(err);
  }
};

module.exports = {
  all,
  getBooking,
  getBookingByUserId,
  add: [validateInput(bookingSchema), add],
  edit: [validateInput(bookingUpdateSchema), edit],
  remove,
  confirmBooking,
  cancelBooking,
  getBookingLogs,
};
