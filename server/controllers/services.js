const { prisma } = require("../prisma/prisma-client.js");
const validateInput = require("../middleware/validateInput");
const Joi = require("joi");
const { ERRORS } = require("../utils/constants");

const serviceSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": ERRORS.NAME_REQUIRED,
    "string.empty": ERRORS.NAME_EMPTY,
  }),
  price: Joi.number().required().messages({
    "any.required": ERRORS.PRICE_REQUIRED,
  }),
  currency: Joi.string().valid("UAH", "USD", "EUR", "PLN").optional().messages({
    "any.required": "Валюта є обовʼязковою",
    "any.only": "Дозволені валюти: UAH, USD, EUR, PLN",
  }),
  duration: Joi.number().required().messages({
    "any.required": ERRORS.DURATION_REQUIRED,
  }),

  description: Joi.string().optional(),
  categoryId: Joi.string().optional(),
  masterIds: Joi.array().optional(),
  userId: Joi.string().optional(),
});

/**
 * @route GET /api/service
 * @desc отримання всіх послуг з підтримкою пагінації
 */
const all = async (req, res, next) => {
  try {
    const { branchId } = req.query;
    const services = await prisma.service.findMany({
      where: branchId
        ? {
            user: {
              branchId,
            },
          }
        : undefined,
      include: {
        user: {
          select: { id: true, name: true, branch: true, branchId: true },
        },
        category: {
          select: { id: true, name: true },
        },
        masters: {
          include: {
            master: {
              select: { id: true, name: true },
            },
          },
        },
      },
    });

    return res.status(200).json(services);
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
    const service = await prisma.service.findUnique({ where: { id } });
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
    const { name, price, duration, description, masterIds, currency } =
      req.body;
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
    }
    const categoryId = req.body.categoryId;

    if (!categoryId) {
      return res.status(400).json({ message: ERRORS.CATEGORY_NOT_FOUND });
    }

    if (!masterIds || !Array.isArray(masterIds) || masterIds.length === 0) {
      return res.status(400).json({ message: "Оберіть хоча б одного майстра" });
    }

    const masters = await prisma.user.findMany({
      where: {
        id: { in: masterIds },
        role: "MASTER",
      },
    });

    if (masters.length !== masterIds.length) {
      return res
        .status(400)
        .json({ message: "Є некоректні або неіснуючі майстри" });
    }

    const newService = await prisma.service.create({
      data: {
        name,
        price: parseFloat(price),
        duration: parseInt(duration),
        description,
        currency,
        category: {
          connect: { id: categoryId },
        },
        user: {
          connect: { id: userId },
        },
        masters: {
          create: masterIds.map((id) => ({ masterId: id })),
        },
      },
      include: { masters: true },
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
    const {
      name,
      price,
      duration,
      description,
      categoryId,
      masterIds,
      currency,
    } = req.body;

    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
    }
    const existingService = await prisma.service.findUnique({
      where: { id },
    });
    if (!existingService) {
      return res.status(404).json({ message: ERRORS.SERVICE_NOT_FOUND });
    }
    if (!masterIds || !Array.isArray(masterIds) || masterIds.length === 0) {
      return res.status(400).json({ message: "Оберіть хоча б одного майстра" });
    }

    const masters = await prisma.user.findMany({
      where: {
        id: { in: masterIds },
        role: "MASTER",
      },
    });

    if (masters.length !== masterIds.length) {
      return res
        .status(400)
        .json({ message: "Є некоректні або неіснуючі майстри" });
    }

    const updatedService = await prisma.service.update({
      where: { id },
      data: {
        name,
        price: parseFloat(price),
        duration: parseInt(duration),
        description,
        currency,
        category: {
          connect: { id: categoryId },
        },
        user: {
          connect: { id: userId },
        },
        masters: {
          deleteMany: {},
          create: masterIds.map((id) => ({ masterId: id })),
        },
      },
      include: {
        masters: true,
      },
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

    const existingService = await prisma.service.findUnique({
      where: { id },
      include: { masters: true },
    });

    if (!existingService) {
      return res.status(404).json({ message: ERRORS.SERVICE_NOT_FOUND });
    }

    // Delete related masters connections (service-master relation)
    await prisma.service.update({
      where: { id },
      data: {
        masters: { deleteMany: {} },
      },
    });

    // Now delete the service itself
    await prisma.service.delete({ where: { id } });

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
