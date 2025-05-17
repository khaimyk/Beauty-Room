const { prisma } = require("../prisma/prisma-client.js");
const Joi = require("joi");
const { ERRORS } = require("../utils/constants.js");

// Validation Schema for Client
const clientSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": ERRORS.NAME_REQUIRED,
    "string.empty": ERRORS.NAME_EMPTY,
  }),
  nickName: Joi.string().optional(),
  phoneNumber: Joi.string()
    .pattern(/^\+?\d{10,13}$/)
    .required()
    .messages({
      "any.required": ERRORS.PHONE_REQUIRED,
      "string.empty": ERRORS.PHONE_EMPTY,
      "string.pattern.base": ERRORS.PHONE_FORMAT_INVALID,
    }),
  userId: Joi.string().optional(),
});

/**
 * Middleware for validating inputs
 */
const validateInput = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

/**
 * @route  GET /api/client
 * @desc   Get all clients with pagination
 * @access Private
 */
const all = async (req, res, next) => {
  const { branchId } = req.query;
  try {
    const clients = await prisma.client.findMany({
      where: branchId
        ? {
            bookings: {
              some: {
                branchId: branchId,
              },
            },
          }
        : undefined,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            phoneNumber: true,
            email: true,
            chatId: true,
          },
        },
      },
    });

    return res.status(200).json(clients);
  } catch (error) {
    console.error("Помилка при отриманні клієнтів:", error);
    next(error);
  }
};
const searchClient = async (req, res, next) => {
  try {
    const { name, phoneNumber, userId } = req.query;

    // Создаем объект для фильтрации
    const where = {};

    if (name) {
      where.name = { contains: name };
    }

    if (phoneNumber) {
      where.phoneNumber = { contains: phoneNumber };
    }
    if (userId) {
      where.userId = userId;
    }

    const clients = await prisma.client.findMany({
      where,
    });

    return res.json(clients);
  } catch (error) {
    console.error("Помилка при пошуку клієнта:", error);
    return res.status(500).json({ error: "Помилка сервера" });
  }
};

/**
 * @route GET /api/client/:id
 * @desc Get client by id
 * @access Private
 */
const getClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const client = await prisma.client.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
    if (!client) {
      return res.status(404).json({ error: ERRORS.CLIENT_NOT_FOUND });
    }
    return res.json(client);
  } catch (error) {
    console.error("Помилка при отриманні клієнта:", error);
    next(error);
  }
};

/**
 * @route POST /api/client/add
 * @desc Create a new client
 * @access Private
 */ const add = async (req, res, next) => {
  try {
    const { name, nickName, phoneNumber, userId, chatId } = req.body;

    let connectUser = undefined;

    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true },
      });

      if (!user) {
        return res.status(400).json({ message: ERRORS.USER_NOT_FOUND });
      }

      connectUser = { connect: { id: userId } };
    }

    const client = await prisma.client.create({
      data: {
        name,
        nickName,
        chatId,
        phoneNumber,
        ...(connectUser ? { user: connectUser } : {}),
      },
      include: {
        user: {
          select: { id: true, name: true, phoneNumber: true, email: true },
        },
      },
    });

    return res.status(201).json(client);
  } catch (error) {
    console.error("Помилка при створенні клієнта:", error);
    next(error);
  }
};

/**
 * @route PUT /api/client/edit/:id
 * @desc Update a client
 * @access Private
 */
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, nickName, phoneNumber, userId, chatId } = req.body;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, phoneNumber: true },
    });
    if (!user) return res.status(400).json({ message: ERRORS.USER_NOT_FOUND });

    const existingClient = await prisma.client.findUnique({ where: { id } });
    if (!existingClient) {
      return res.status(404).json({ error: ERRORS.CLIENT_NOT_FOUND });
    }

    const updatedClient = await prisma.client.update({
      where: { id },
      data: {
        name,
        nickName,
        chatId,
        phoneNumber,
        user: { connect: { id: userId } },
      },
      include: {
        user: {
          select: { id: true, name: true, phoneNumber: true, email: true },
        },
      },
    });
    return res.json(updatedClient);
  } catch (error) {
    console.error("Помилка при оновленні клієнта:", error);
    next(error);
  }
};

/**
 * @route DELETE /api/client/remove/:id
 * @desc Delete a client
 * @access Private
 */
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existingClient = await prisma.client.findUnique({ where: { id } });
    if (!existingClient) {
      return res.status(404).json({ error: ERRORS.CLIENT_NOT_FOUND });
    }

    await prisma.client.delete({ where: { id } });
    return res.status(204).send(); // No Content
  } catch (error) {
    console.error("Помилка при видаленні клієнта:", error);
    next(error);
  }
};

module.exports = {
  all,
  getClient,
  add: [validateInput(clientSchema), add],
  edit: [validateInput(clientSchema), edit],
  remove,
  searchClient,
};
