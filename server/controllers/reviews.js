const { prisma } = require("../prisma/prisma-client.js");
const Joi = require("joi");
const validateInput = require("../middleware/validateInput");
const { ERRORS } = require("../utils/constants.js");

// Валідація для створення відгуку
const createReviewSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required().messages({
    "any.required": ERRORS.RATING_REQUIRED,
    "number.min": ERRORS.RATING_MIN,
    "number.max": ERRORS.RATING_MAX,
  }),
  comment: Joi.string().optional().messages({
    "string.empty": ERRORS.COMMENT_EMPTY,
  }),
  clientId: Joi.string().required().messages({
    "any.required": ERRORS.CLIENT_REQUIRED,
    "string.empty": ERRORS.CLIENT_EMPTY,
  }),
  userId: Joi.string().optional().messages({
    "string.empty": ERRORS.USER_EMPTY,
  }),
  branchId: Joi.string().optional().messages({
    "string.empty": ERRORS.BRANCH_EMPTY,
  }),
}).custom((value, helpers) => {
  if (!value.clientId) {
    return helpers.error("any.invalid", { message: ERRORS.CLIENT_REQUIRED });
  }
  if (!value.userId && !value.branchId) {
    return helpers.error("any.invalid", {
      message: ERRORS.USER_OR_BRANCH_REQUIRED,
    });
  }
  if (value.userId && value.branchId) {
    return helpers.error("any.invalid", {
      message: ERRORS.USER_AND_BRANCH_CONFLICT,
    });
  }
  return value;
});

/**
 * Перевірка, чи є у клієнта підтверджене бронювання, яке вже відбулось
 */
const hasConfirmedBooking = async (clientId, userId, branchId) => {
  const now = new Date();

  // Якщо вказано clientId
  if (clientId) {
    const client = await prisma.client.findUnique({
      where: { id: clientId },
      include: {
        bookings: {
          where: {
            status: "CONFIRMED",
            date: { lte: now }, // Дата бронювання в минулому
            ...(userId && { userId }), // Бронювання для конкретного майстра
            ...(branchId && { branchId }), // Бронювання для конкретного салону
          },
        },
      },
    });

    if (!client) {
      throw new Error(ERRORS.CLIENT_NOT_FOUND);
    }

    // Якщо немає підтверджених бронювань
    if (client.bookings.length === 0) {
      throw new Error(ERRORS.NO_CONFIRMED_BOOKINGS);
    }
  }
};

/**
 * @route  GET /api/reviews
 * @desc   Отримати всі відгуки
 * @access Public
 */
const all = async (req, res, next) => {
  try {
    const reviews = await prisma.review.findMany({
      include: {
        client: { select: { id: true, name: true } },
        user: { select: { id: true, name: true } },
        branch: { select: { id: true, name: true } },
      },
    });

    return res.status(200).json(reviews);
  } catch (error) {
    console.error("Помилка при отриманні відгуків:", error);
    return next(error);
  }
};

/**
 * @route GET /api/reviews/:id
 * @desc Отримати відгук за ID
 * @access Public
 */
const getReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await prisma.review.findUnique({
      where: { id },
      include: {
        client: { select: { id: true, name: true } },
        user: { select: { id: true, name: true } },
        branch: { select: { id: true, name: true } },
      },
    });

    if (!review) {
      return res.status(404).json({ message: ERRORS.REVIEW_NOT_FOUND });
    }

    return res.json(review);
  } catch (error) {
    console.error("Помилка при отриманні відгуку:", error);
    return next(error);
  }
};

/**
 * @route POST /api/reviews/add
 * @desc Створити новий відгук
 * @access Public
 */
const add = async (req, res, next) => {
  try {
    const { rating, comment, clientId, userId, branchId } = req.body;

    const client = await prisma.client.findUnique({ where: { id: clientId } });

    if (!client) {
      return res.status(400).json({ message: ERRORS.CLIENT_NOT_FOUND });
    }

    // Перевірка, щоб не можна було вказати одночасно userId і branchId
    if (userId && branchId) {
      return res.status(400).json({ message: ERRORS.USER_AND_BRANCH_CONFLICT });
    }

    // Якщо вказано clientId, перевіряємо наявність підтверджених бронювань
    if (clientId) {
      await hasConfirmedBooking(clientId, userId, branchId);
    }

    // Створення відгуку
    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        client: { connect: { id: clientId } },
        user: userId ? { connect: { id: userId } } : undefined,
        branch: branchId ? { connect: { id: branchId } } : undefined,
      },
      include: {
        client: { select: { id: true, name: true } },
        user: { select: { id: true, name: true } },
        branch: { select: { id: true, name: true } },
      },
    });

    return res.status(201).json(review);
  } catch (error) {
    console.error("Помилка при створенні відгуку:", error);
    return res.status(400).json({ message: error.message });
  }
};

/**
 * @route DELETE /api/reviews/remove/:id
 * @desc Видалити відгук
 * @access Private
 */
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingReview = await prisma.review.findUnique({
      where: { id },
    });

    if (!existingReview) {
      return res.status(404).json({ message: ERRORS.REVIEW_NOT_FOUND });
    }

    await prisma.review.delete({ where: { id } });
    return res.status(204).send(); // No Content
  } catch (error) {
    console.error("Помилка при видаленні відгуку:", error);
    return next(error);
  }
};

module.exports = {
  all,
  getReview,
  add: [validateInput(createReviewSchema), add],
  remove,
};
