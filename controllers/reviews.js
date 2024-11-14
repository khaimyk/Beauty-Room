const { prisma } = require("../prisma/prisma-client.js");
const Joi = require("joi");
const paginateResponse = require("../utils/pagination.js");
const { ERRORS } = require("../utils/constants.js");

// Validation schema for Review
const reviewSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required().messages({
    "any.required": ERRORS.RATING_REQUIRED,
    "number.min": ERRORS.RATING_MIN,
    "number.max": ERRORS.RATING_MAX,
  }),
  comment: Joi.string().optional(),
  serviceId: Joi.string().required().messages({
    "any.required": ERRORS.SERVICE_REQUIRED,
  }),
  clientId: Joi.string().optional().messages({
    "string.empty": ERRORS.CLIENT_EMPTY,
  }),
  userId: Joi.string().optional().messages({
    "string.empty": ERRORS.USER_EMPTY,
  }),
});

// Middleware for validating input data
const validateInput = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateRelatedEntities = async ({ userId, clientId, serviceId }) => {
  if (userId) {
    const userExists = await prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) throw new Error("User not found");
  }
  if (clientId) {
    const clientExists = await prisma.client.findUnique({
      where: { id: clientId },
    });
    if (!clientExists) throw new Error("Client not found");
  }
  if (serviceId) {
    const serviceExists = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    if (!serviceExists) throw new Error("Service not found");
  }
};

/**
 * @route  GET /api/reviews
 * @desc   Get all reviews with pagination
 * @access Private
 */
const all = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const [reviews, total] = await Promise.all([
      prisma.review.findMany({
        skip,
        take: limit,
        where: { serviceId: req.params.serviceId },
        include: { service: true, user: true, client: true }, // Include user data
      }),
      prisma.review.count(),
    ]);
    return res.status(200).json(paginateResponse(reviews, page, limit, total));
  } catch (err) {
    next(err);
  }
};

/**
 * @route GET /api/reviews/:id
 * @desc Get a review by ID
 * @access Private
 */
const getReview = async (req, res, next) => {
  try {
    const review = await prisma.review.findUnique({
      where: { id: req.params.id },
      include: { service: true, user: true, client: true },
    });
    if (!review) {
      return res.status(404).json({ message: ERRORS.REVIEW_NOT_FOUND });
    }
    return res.json(review);
  } catch (err) {
    next(err);
  }
};

/**
 * @route POST /api/reviews/add
 * @desc Create a new review
 * @access Private
 */
const add = async (req, res, next) => {
  try {
    const { rating, comment, serviceId, userId, clientId } = req.body;
    await validateRelatedEntities({ userId, clientId, serviceId });
    const newReview = await prisma.review.create({
      data: {
        rating,
        comment,
        ...(clientId && { client: { connect: { id: clientId } } }),
        ...(serviceId && { service: { connect: { id: serviceId } } }),
        ...(userId && { user: { connect: { id: userId } } }),
      },
      include: {
        service: true,
        client: true,
        user: true, // Include user data in the response
      },
    });
    return res.status(201).json(newReview);
  } catch (err) {
    if (
      err.message === ERRORS.USER_NOT_FOUND ||
      err.message === ERRORS.CLIENT_NOT_FOUND ||
      err.message === ERRORS.SERVICE_NOT_FOUND
    ) {
      return res.status(400).json({ message: err.message });
    }
    next(err);
  }
};

/**
 * @route PUT /api/reviews/edit/:id
 * @desc Update a review
 * @access Private
 */
const edit = async (req, res, next) => {
  try {
    const { rating, comment, serviceId, userId, clientId } = req.body;

    const existingReview = await prisma.review.findUnique({
      where: { id: req.params.id },
    });
    if (!existingReview) {
      return res.status(404).json({ message: ERRORS.REVIEW_NOT_FOUND });
    }

    await validateRelatedEntities({ userId, clientId, serviceId });
    const updatedReview = await prisma.review.update({
      where: { id: req.params.id },
      data: {
        rating,
        comment,
        ...(clientId && { client: { connect: { id: clientId } } }),
        ...(serviceId && { service: { connect: { id: serviceId } } }),
        ...(userId && { user: { connect: { id: userId } } }),
      },
      include: { service: true, client: true, user: true },
    });
    return res.json(updatedReview);
  } catch (err) {
    if (
      err.message === ERRORS.USER_NOT_FOUND ||
      err.message === ERRORS.CLIENT_NOT_FOUND ||
      err.message === ERRORS.SERVICE_NOT_FOUND
    ) {
      return res.status(400).json({ message: err.message });
    }
    next(err);
  }
};

/**
 * @route DELETE /api/reviews/remove/:id
 * @desc Delete a review
 * @access Private
 */
const remove = async (req, res, next) => {
  try {
    const existingReview = await prisma.review.findUnique({
      where: { id: req.params.id },
    });
    if (!existingReview) {
      return res.status(404).json({ message: ERRORS.REVIEW_NOT_FOUND });
    }

    await prisma.review.delete({ where: { id: req.params.id } });
    return res.status(204).send(); // No Content
  } catch (err) {
    next(err);
  }
};

module.exports = {
  all,
  getReview,
  add: [validateInput(reviewSchema), add],
  edit: [validateInput(reviewSchema), edit],
  remove,
};
