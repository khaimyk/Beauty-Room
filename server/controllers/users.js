const fs = require("fs");
const path = require("path");
const { prisma } = require("../prisma/prisma-client.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ERRORS } = require("../utils/constants.js");
const Joi = require("joi");
const crypto = require("crypto");
const { sendEmail } = require("../utils/sendEmail.js");
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
  password: Joi.string().min(8).required(),
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
      user && (await bcrypt.compare(password, user.password));

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
  const { email, password, name, role = "CLIENT" } = req.body;
  const image = req.file ? `/image/${req.file.filename}` : "";
  if (!email || !password || !name) {
    return res.status(400).json({ message: ERRORS.NAME_ALL_REQUIRED });
  }
  if (!["CLIENT", "MASTER", "ADMIN"].includes(role)) {
    return res.status(400).json({ message: "Недопустима роль." });
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const role = email.includes("admin") ? "ADMIN" : "CLIENT";
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        image,
        role,
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
        role: user.role,
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
  const userId = req.user.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        branch: { select: { id: true, name: true } },
      },
    });

    if (!user) {
      return res.status(400).json({ error: ERRORS.USER_NOT_FOUND });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ error: ERRORS.USER_NOT_FOUND });
  }
};

/**
 * @route GET /api/user
 * @desc Отримати всіх користувачів
 * @access Private (Припускається наявність авторизації)
 */
const getAll = async (req, res) => {
  try {
    const { branchId } = req.query;
    const users = await prisma.user.findMany({
      where: branchId
        ? {
            branchId: branchId,
          }
        : undefined,
      include: {
        branch: { select: { id: true, name: true } },
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
  const {
    email,
    name,
    password,
    chatId,
    branchId,
    phoneNumber,
    description,
    nickName,
  } = req.body;

  if (chatId) {
    const existingUser = await prisma.user.findUnique({
      where: { chatId },
    });
    if (existingUser && existingUser.id !== id) {
      return res
        .status(400)
        .json({ error: "Цей Telegram ID вже використовується." });
    }
  }
  const image = req.file ? `/image/${req.file.filename}` : "";
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      return res.status(404).json({ message: ERRORS.USER_NOT_FOUND });
    }
    if (branchId) {
      const branchExists = await prisma.branch.findUnique({
        where: { id: branchId },
      });
      if (!branchExists) {
        return res.status(400).json({ message: "Філія не знайдена" });
      }
    }

    if (req.file && user.image) {
      const oldImagePath = path.join(__dirname, "..", user.image);
      fs.unlink(oldImagePath, (err) => {
        if (err) console.error("Error deleting old image:", err);
      });
    }

    const updateData = {
      ...(email && { email }),
      ...(name && { name }),
      ...(image && { image }),
      ...(chatId && { chatId }),
      ...(nickName && { nickName }),
      ...(phoneNumber && { phoneNumber }),
      ...(description && { description }),
      ...(password && {
        password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      }),
      ...(branchId !== undefined && {
        branch: branchId ? { connect: { id: branchId } } : { disconnect: true },
      }),
    };

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        branch: { select: { id: true, name: true } },
      },
    });

    res.status(200).json({
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name,
      image: updatedUser.image,
      chatId: updatedUser.chatId,
      nickName: updatedUser.nickName,
      branch: updatedUser.branch,
      phoneNumber: updatedUser.phoneNumber,
      description: updatedUser.description,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: ERRORS.USER_NOT_REFRESH });
  }
};
/**
 * @route PUT /api/user/role/:id
 * @desc Змінити роль користувача
 * @access ADMIN
 */
const updateRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const validRoles = ["CLIENT", "MASTER", "ADMIN", "SUPERADMIN"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: ERRORS.INVALID_ROLE });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: ERRORS.USER_NOT_FOUND });
    }
    const admin = req.user;
    if (admin.role !== "ADMIN" && admin.role !== "SUPERADMIN") {
      return res.status(403).json({ message: ERRORS.FORBIDDEN });
    }

    const updateData = {
      role,
      branch:
        role === "MASTER"
          ? { connect: { id: admin.branchId } }
          : { disconnect: true },
    };

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        branch: { select: { id: true, name: true } },
      },
    });
    if (role === "MASTER") {
      const existingAvailability = await prisma.masterAvailability.findUnique({
        where: { userId: id },
      });

      if (!existingAvailability) {
        await prisma.masterAvailability.create({
          data: {
            userId: id,
            availability: JSON.stringify([]),
          },
        });
        console.log(`Створено masterAvailability для користувача ${id}`);
      }
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: ERRORS.USER_NOT_UPDATED });
  }
};

/**
 * @route DELETE /api/user/:id
 * @desc Видалити користувача
 * @access Private
 */
const remove = async (req, res) => {
  const { id } = req.params;
  const withRelations = req.query.withRelations === "true";

  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: ERRORS.USER_NOT_FOUND });
    }
    if (withRelations) {
      await prisma.booking.deleteMany({ where: { userId: id } });
      await prisma.bookingLog.deleteMany({ where: { userId: id } });
      await prisma.service.deleteMany({ where: { userId: id } });
      await prisma.category.deleteMany({ where: { userId: id } });
      await prisma.review.deleteMany({ where: { userId: id } });
      await prisma.masterAvailability.deleteMany({ where: { userId: id } });
    }

    await prisma.user.delete({ where: { id } });
    res.status(200).json({ message: ERRORS.USER_DELETED });
  } catch (error) {
    console.error("Delete user failed:", error);
    res.status(500).json({ message: ERRORS.USER_NOT_DELETED });
  }
};
const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    if (!user) {
      return res.status(404).json({ message: ERRORS.USER_NOT_FOUND });
    }

    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: ERRORS.USER_NOT_DELETED });
  }
};

/**
 * @route POST /api/user/forgot-password
 * @desc Надіслати email з посиланням для скидання пароля
 * @access Public
 */
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "Невалідна email адреса" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(404).json({ message: "Користувача не знайдено" });

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + 1000 * 60 * 60); // 1 година

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: token,
        resetTokenExpiry: expiry,
      },
    });

    const resetLink = `${process.env.FRONTEND_URL}/user/reset-password?token=${token}`;
    const htmlMessage = `
  <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9fafb; color: #111;">
    <h2 style="color: #4f46e5;">🔐 Відновлення пароля / Reset Password / Resetowanie hasła</h2>
    
    <p>
      🇺🇦 Ви отримали цей лист, оскільки хтось (можливо ви) надіслав запит на скидання пароля.<br />
      🇬🇧 You received this email because someone (possibly you) requested a password reset.<br />
      🇵🇱 Otrzymałeś tę wiadomość, ponieważ ktoś (może Ty) poprosił o zresetowanie hasła.
    </p>

    <p>
      🇺🇦 Натисніть кнопку нижче, щоб скинути пароль.<br />
      🇬🇧 Click the button below to reset your password.<br />
      🇵🇱 Kliknij przycisk poniżej, aby zresetować hasło.
    </p>

    <div style="margin: 20px 0;">
      <a href="${resetLink}" 
         style="display: inline-block; background-color: #4f46e5; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold;">
         Скинути / Reset / Zresetuj
      </a>
    </div>

    <p>
      🇺🇦 Або відкрийте посилання вручну:<br />
      🇬🇧 Or open this link manually:<br />
      🇵🇱 Lub otwórz link ręcznie:
    </p>
    <p><a href="${resetLink}" style="color: #4f46e5;">${resetLink}</a></p>

    <p style="margin-top: 24px; font-size: 14px; color: #6b7280;">
      🇺🇦 Посилання дійсне 1 годину.<br />
      🇬🇧 The link is valid for 1 hour.<br />
      🇵🇱 Link jest ważny przez 1 godzinę.
    </p>

  </div>
`;

    await sendEmail(user.email, "Відновлення пароля", htmlMessage, true);

    res
      .status(200)
      .json({ message: "Посилання для скидання пароля відправлено на email" });
  } catch (error) {
    console.error("forgotPassword error", error);
    res.status(500).json({ message: "Помилка при надсиланні листа" });
  }
};

/**
 * @route POST /api/user/reset-password
 * @desc Скинути пароль за токеном
 * @access Public
 */
const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password) {
    return res.status(400).json({ message: "Введіть токен і новий пароль" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Недійсний або прострочений токен" });
    }

    const bcrypt = require("bcrypt");
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    res.status(200).json({ message: "Пароль успішно оновлено" });
  } catch (error) {
    console.error("resetPassword error", error);
    res.status(500).json({ message: "Не вдалося скинути пароль" });
  }
};

module.exports = {
  login,
  register,
  current,
  getAll,
  edit,
  updateRole,
  remove,
  getById,
  forgotPassword,
  resetPassword,
};
