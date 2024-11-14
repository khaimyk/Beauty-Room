const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../models/services");
const validateInput = require("../middleware/validateInput");
const paginateResponse = require("../utils/pagination");
const Joi = require("joi");
const { ERRORS } = require("../utils/constants");

// Validation schemas
const serviceSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": ERRORS.NAME_REQUIRED,
    "string.empty": ERRORS.NAME_EMPTY,
  }),
  price: Joi.number().required().messages({
    "any.required": ERRORS.PRICE_REQUIRED,
  }),
  duration: Joi.number().required().messages({
    "any.required": ERRORS.DURATION_REQUIRED,
  }),
  description: Joi.string().optional(),
  categoryId: Joi.string().optional(),
  userId: Joi.string().optional(),
});

/**
 * @route GET /api/service
 * @desc отримання всіх послуг з підтримкою пагінації
 */
const all = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
      return res.status(400).json({ message: ERRORS.INVALID_PAGE_OR_LIMIT });
    }

    const { services, total } = await getAllServices({
      page: Number(page),
      limit: Number(limit),
    });
    res.status(200).json(paginateResponse(services, page, limit, total));
  } catch (error) {
    next(error);
  }
};

/**
 * @route GET /api/service/:id
 * @desc отримання послуги за id
 */
const service = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await getServiceById(id);
    if (!service) {
      return res.status(404).json({ message: ERRORS.SERVICE_NOT_FOUND });
    }
    res.json(service);
  } catch (error) {
    next(error);
  }
};

/**
 * @route POST /api/service/add
 * @desc додавання нової послуги
 */
const add = async (req, res, next) => {
  try {
    const { name, price, duration, description, categoryId } = req.body;
    const userId = req.user ? req.user.id : null;

    // Set up category connection or creation

    const newService = await createService({
      name,
      price,
      duration,
      description,
      user: userId ? { connect: { id: userId } } : undefined,
      category: categoryId ? { connect: { id: categoryId } } : undefined,
    });

    res.status(201).json(newService);
  } catch (error) {
    next(error);
  }
};

/**
 * @route PUT /api/service/edit/:id
 * @desc оновлення послуги
 */
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, duration, description, categoryId, userId } = req.body;

    // Verify the service exists
    const existingService = await getServiceById(id);
    if (!existingService) {
      return res.status(404).json({ message: ERRORS.SERVICE_NOT_FOUND });
    }

    const updatedService = await updateService(id, {
      name,
      price,
      duration,
      description,
      user: userId ? { connect: { id: userId } } : undefined,
      category: categoryId ? { connect: { id: categoryId } } : undefined,
    });
    res.json(updatedService);
  } catch (error) {
    next(error);
  }
};

/**
 * @route DELETE /api/service/remove/:id
 * @desc видалення послуги
 */
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingService = await getServiceById(id);
    if (!existingService) {
      return res.status(404).json({ message: ERRORS.SERVICE_NOT_FOUND });
    }
    await deleteService(id);
    res.status(204).json({ message: ERRORS.SERVICE_DELETED });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  all,
  service,
  add: [validateInput(serviceSchema), add],
  edit: [validateInput(serviceSchema), edit],
  remove,
};
