const { prisma } = require("../prisma/prisma-client.js");
const brypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ERRORS } = require("../utils/constants");
const Joi = require("joi");
/**
 * @route POST /api/user/login
 * @desс Логін
 * @access Public
 */
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
});

const generateToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "24h" });
const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: ERRORS.NAME_ALL_REQUIRED });

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: ERRORS.EMAIL_OR_PASSWORD_REQUIRED });
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    const isPasswordCorrect =
      user && (await brypt.compare(password, user.password));

    if (!user || !isPasswordCorrect) {
      return sendErrorResponse(res, 400, ERRORS.INVALID_EMAIL_OR_PASSWORD);
    }

    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      token: generateToken(user.id, user.role),
    });
  } catch (error) {
    res.status(400).json({ message: ERRORS.USER_NOT_FOUND });
  }
};
/**
 * @route POST /api/user/register
 * @desс реєстрація
 * @access Public
 */
const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: ERRORS.LOGIN_FORMAT });
  const { email, password, name } = req.body;
  const image = req.file ? `/image/${req.file.filename}` : null;
  if (!email || !password || !name) {
    return res.status(400).json({ message: ERRORS.NAME_ALL_REQUIRED });
  }
  try {
    const registeredUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (registeredUser) {
      return res.status(400).json({ message: ERRORS.USER_ALREADY_EXISTS });
    }
    const salt = await brypt.genSalt(10);
    const hashedPassword = await brypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        image,
        role: "user",
      },
    });

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(400).json({ message: ERRORS.JWT_SECRET_NOT_FOUND });
    }
    if (user) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        name,
        image: user.image || null,
        token: generateToken(user.id, user.role),
      });
    } else {
      return res.status(400).json({ message: ERRORS.USER_NOT_FOUND });
    }
  } catch (error) {
    res.status(500).json({ message: ERRORS.USER_NOT_FOUND });
  }
};

/**
 * @route GET /api/user/current
 * @desс актуальний користувач
 * @access Private
 */

const current = async (req, res) => {
  return res.status(200).json(req.user);
};

/**
 * @route GET /api/user
 * @desc Отримати всіх користувачів
 * @access Private (Припускається наявність авторизації)
 */
const getAll = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: ERRORS.USER_NOT_FOUND });
  }
};

/**
 * @route PUT /api/user/:id
 * @desc Оновити інформацію користувача
 * @access Private
 */
const edit = async (req, res) => {
  const { id } = req.params;
  const { email, name, password } = req.body;
  const image = req.file ? `/image/${req.file.filename}` : null;
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      return res.status(404).json({ message: ERRORS.USER_NOT_FOUND });
    }

    const updatedData = {};
    if (email) updatedData.email = email;
    if (name) updatedData.name = name;
    if (image) updatedData.image = image;
    if (password) {
      const salt = await brypt.genSalt(10);
      updatedData.password = await brypt.hash(password, salt);
    }

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: updatedData,
    });

    res.status(200).json({
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
      image: updatedUser.image,
    });
  } catch (error) {
    res.status(500).json({ message: ERRORS.USER_NOT_REFRESH });
  }
};

/**
 * @route DELETE /api/user/:id
 * @desc Видалити користувача
 * @access Private
 */
const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      return res.status(404).json({ message: ERRORS.USER_NOT_FOUND });
    }

    await prisma.user.delete({ where: { id: id } });
    res.status(200).json({ message: ERRORS.USER_DELETED });
  } catch (error) {
    res.status(500).json({ message: ERRORS.USER_NOT_DELETED });
  }
};

module.exports = {
  login,
  register,
  current,
  getAll,
  edit,
  remove,
};
