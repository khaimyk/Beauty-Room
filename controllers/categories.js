const { prisma } = require("../prisma/prisma-client.js");
const Joi = require("joi");
const validateInput = require("../middleware/validateInput");
const paginateResponse = require("../utils/pagination");
const { ERRORS } = require("../utils/constants.js");

// Validation Schemas for Category
const createCategorySchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": ERRORS.NAME_REQUIRED,
    "string.empty": ERRORS.NAME_EMPTY,
  }),
  userId: Joi.string().optional().messages({
    "string.empty": ERRORS.USER_EMPTY,
  }),
});

const updateCategorySchema = Joi.object({
  name: Joi.string().optional().messages({
    "string.empty": ERRORS.NAME_EMPTY,
  }),
});

/**
 * Middleware for validating inputs with dynamic schema
 */
/**
 * @route  GET /api/category
 * @desc   Get all categories with pagination and sorting
 * @access Private
 */
const all = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      order = "asc",
    } = req.query;
    const skip = (page - 1) * limit;
    const [categories, total] = await Promise.all([
      prisma.category.findMany({
        skip,
        take: limit,
        orderBy: { [sortBy]: order === "asc" ? "asc" : "desc" },
      }),
      prisma.category.count(),
    ]);

    return res
      .status(200)
      .json(paginateResponse(categories, page, limit, total));
  } catch (error) {
    console.error("Помилка при отриманні:", error);
    return next(error);
  }
};

/**
 * @route GET /api/category/:id
 * @desc Get category by id
 * @access Private
 */
const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.findUnique({ where: { id } });
    if (!category) {
      return res.status(404).json({ message: ERRORS.CATEGORY_NOT_FOUND });
    }
    return res.json(category);
  } catch (error) {
    console.error("Помилка при отриманні:", error);
    return next(error);
  }
};

/**
 * @route POST /api/category/add
 * @desc Create a new category
 * @access Private
 */
const add = async (req, res, next) => {
  try {
    const { name, userId } = req.body;

    if (!userId) {
      return res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
    }

    const category = await prisma.category.create({
      data: {
        name,
        user: {
          connect: { id: userId },
        },
      },
    });
    return res.status(201).json(category);
  } catch (error) {
    return next(error);
  }
};

/**
 * @route PUT /api/category/edit/:id
 * @desc Update a category
 * @access Private
 */
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const existingCategory = await prisma.category.findUnique({
      where: { id },
    });
    if (!existingCategory) {
      return res.status(404).json({ message: ERRORS.CATEGORY_NOT_FOUND });
    }

    const updatedCategory = await prisma.category.update({
      where: { id },
      data: { name },
    });
    return res.json(updatedCategory);
  } catch (error) {
    console.error("Помилка при оновленні:", error);
    return next(error);
  }
};

/**
 * @route DELETE /api/category/remove/:id
 * @desc Delete a category
 * @access Private
 */
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingCategory = await prisma.category.findUnique({
      where: { id },
    });
    if (!existingCategory) {
      return res.status(404).json({ message: ERRORS.CATEGORY_NOT_FOUND });
    }

    await prisma.category.delete({ where: { id } });
    return res.status(204).send(); // No Content
  } catch (error) {
    console.error("Помилка при видаленні:", error);
    return next(error);
  }
};

module.exports = {
  all,
  getCategory,
  add: [validateInput(createCategorySchema), add],
  edit: [validateInput(updateCategorySchema), edit],
  remove,
};
