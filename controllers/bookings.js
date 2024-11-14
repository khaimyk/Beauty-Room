const { prisma } = require("../prisma/prisma-client.js");
const Joi = require("joi");
const paginateResponse = require("../utils/pagination.js");
const { ERRORS } = require("../utils/constants.js");

// Validation schema for Booking
const bookingSchema = Joi.object({
  userId: Joi.string().required().messages({
    "any.required": ERRORS.USER_REQUIRED,
  }),
  serviceId: Joi.string().required().messages({
    "any.required": ERRORS.SERVICE_REQUIRED,
  }),
  date: Joi.date().iso().required().messages({
    "any.required": ERRORS.DATE_REQUIRED,
    "date.format": ERRORS.DATE_FORMAT,
  }),
  notes: Joi.string().optional(),
  time: Joi.string().optional(),
});
const bookingUpdateSchema = Joi.object({
  userId: Joi.string().optional(),
  serviceId: Joi.string().optional(),
  date: Joi.date().iso().optional(),
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
    const { page = 1, limit = 10, userId } = req.query;
    const skip = (page - 1) * limit;

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        skip,
        take: limit,
        where: userId ? { userId } : {},
        include: {
          user: { select: { id: true, name: true } },
          service: { select: { id: true, name: true } },
        },
      }),
      prisma.booking.count({ where: userId ? { userId } : {} }),
    ]);

    return res.status(200).json(paginateResponse(bookings, page, limit, total));
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
        service: { select: { id: true, name: true } },
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
  const { userId, serviceId, date, notes, time } = req.body;
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
    const newBooking = await prisma.booking.create({
      data: {
        date,
        service: {
          connect: { id: serviceId }, // Підключення існуючої послуги
        },
        user: {
          connect: { id: userId }, // Підключення існуючої послуги
        },
        notes,
        time,
      },
      include: {
        user: { select: { id: true, name: true } },
        service: { select: { id: true, name: true } },
      },
    });
    return res.status(201).json({
      success: true,
      data: newBooking,
      message: "Booking created successfully",
    });
  } catch (err) {
    console.error("Error creating booking:", err);
    next(err);
  }
};

/**
 * @route PUT /api/bookings/edit/:id
 * @desc Update a booking
 * @access Private
 */
const edit = async (req, res, next) => {
  const { userId, serviceId, date, notes, time } = req.body;
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
        service: {
          connect: { id: serviceId }, // Підключення існуючої послуги
        },
        user: {
          connect: { id: userId }, // Підключення існуючої послуги
        },
        notes,
        time,
      },
      include: {
        user: { select: { id: true, name: true } },
        service: { select: { id: true, name: true } },
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

module.exports = {
  all,
  getBooking,
  add: [validateInput(bookingSchema), add],
  edit: [validateInput(bookingUpdateSchema), edit],
  remove,
};
