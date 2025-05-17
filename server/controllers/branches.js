const { prisma } = require("../prisma/prisma-client.js");
const Joi = require("joi");
const validateInput = require("../middleware/validateInput.js");
const { ERRORS } = require("../utils/constants.js");
const fs = require("fs");
const path = require("path");

// Валідація для створення філії
const createBranchSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": ERRORS.NAME_REQUIRED,
    "string.empty": ERRORS.NAME_EMPTY,
  }),
  address: Joi.string().optional().messages({
    "string.empty": ERRORS.ADDRESS_EMPTY,
  }),
  phoneNumber: Joi.string().optional().messages({
    "string.empty": ERRORS.PHONE_EMPTY,
  }),
  description: Joi.string().optional().messages({
    "string.empty": ERRORS.DESCRIPTION_EMPTY,
  }),
  socialMedia: Joi.string().optional().messages({
    "string.empty": ERRORS.SOCIAL_MEDIA_EMPTY,
  }),
  city: Joi.string().optional().messages({
    "string.empty": ERRORS.CITY_EMPTY,
  }),
  adminId: Joi.string().optional().messages({
    "string.empty": ERRORS.USER_EMPTY,
  }),
});

// Валідація для оновлення філії
const updateBranchSchema = Joi.object({
  name: Joi.string().optional().messages({
    "string.empty": ERRORS.NAME_EMPTY,
  }),
  address: Joi.string().optional().messages({
    "string.empty": ERRORS.ADDRESS_EMPTY,
  }),
  phoneNumber: Joi.string().optional().messages({
    "string.empty": ERRORS.PHONE_EMPTY,
  }),
  description: Joi.string().optional().messages({
    "string.empty": ERRORS.DESCRIPTION_EMPTY,
  }),
  socialMedia: Joi.string().optional().messages({
    "string.empty": ERRORS.SOCIAL_MEDIA_EMPTY,
  }),
  city: Joi.string().optional().messages({
    "string.empty": ERRORS.CITY_EMPTY,
  }),
  status: Joi.string().valid("ACTIVE", "INACTIVE").optional().messages({
    "any.only": ERRORS.INVALID_STATUS,
  }),
  adminId: Joi.string().optional().messages({
    "string.empty": ERRORS.USER_EMPTY,
  }),
});

/**
 * @route  GET /api/branch
 * @desc   Отримати всі філії
 * @access Private (SUPERADMIN, ADMIN)
 */
const all = async (req, res, next) => {
  try {
    const branches = await prisma.branch.findMany({
      include: {
        superAdmin: { select: { id: true, name: true } },
        admin: { select: { id: true, name: true } },
        users: { select: { id: true, name: true } },
      },
    });

    return res.status(200).json(
      branches.map((branch) => ({
        ...branch,
        socialMedia: JSON.parse(branch.socialMedia),
      }))
    );
  } catch (error) {
    console.error("Помилка при отриманні філій:", error);
    return next(error);
  }
};

/**
 * @route GET /api/branch/:id
 * @desc Отримати філію за ID
 * @access Private (SUPERADMIN, ADMIN)
 */
const getBranch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const branch = await prisma.branch.findUnique({
      where: { id },
      include: {
        superAdmin: { select: { id: true, name: true } },
        admin: { select: { id: true, name: true } },
        users: { select: { id: true, name: true } },
      },
    });

    if (!branch) {
      return res.status(404).json({ message: ERRORS.BRANCH_NOT_FOUND });
    }
    // Переконуємося, що socialMedia - це масив
    let parsedSocialMedia;
    try {
      parsedSocialMedia = JSON.parse(branch.socialMedia); // Якщо це рядок, парсимо
    } catch {
      parsedSocialMedia = branch.socialMedia; // Якщо це вже масив, залишаємо як є
    }

    return res.json({
      ...branch,
      socialMedia: parsedSocialMedia,
    });
  } catch (error) {
    console.error("Помилка при отриманні філії:", error);
    return next(error);
  }
};

/**
 * @route POST /api/branch/add
 * @desc Створити нову філію
 * @access Private (SUPERADMIN)
 */
const add = async (req, res, next) => {
  try {
    const image = req.file ? `/image/${req.file.filename}` : "";
    const {
      name,
      address,
      phoneNumber,
      description,
      socialMedia,
      city,
      adminId,
    } = req.body;

    const superAdminId = req.user.id;
    if (!req.user) {
      return res.status(401).json({ message: "Користувач не авторизований" });
    }

    // Перевірка, чи користувач є SUPERADMIN
    const superAdmin = await prisma.user.findUnique({
      where: { id: superAdminId },
    });

    if (!superAdmin || superAdmin.role !== "SUPERADMIN") {
      return res
        .status(403)
        .json({ message: "Доступ заборонено: потрібна роль SUPERADMIN" });
    }

    // Перевірка, чи адмін існує і має роль ADMIN
    if (adminId) {
      const admin = await prisma.user.findUnique({
        where: { id: adminId },
      });

      if (!admin || admin.role !== "ADMIN") {
        return res.status(400).json({ message: "Користувач не є адміном" });
      }
    }
    // Створення філії
    const branch = await prisma.branch.create({
      data: {
        name,
        address,
        phoneNumber,
        description,
        socialMedia: JSON.stringify(socialMedia),
        city,
        superAdmin: { connect: { id: superAdminId } },
        admin: adminId ? { connect: { id: adminId } } : undefined,
        image,
      },
      include: {
        superAdmin: { select: { id: true, name: true } },
        admin: { select: { id: true, name: true } },
      },
    });

    return res.status(201).json(branch);
  } catch (error) {
    console.error("Помилка при створенні філії:", error);
    return res.status(500).json({
      message: "Не вдалося створити філію",
      error: error.message,
    });
  }
};

/**
 * @route PUT /api/branch/edit/:id
 * @desc Оновити філію
 * @access Private (SUPERADMIN, ADMIN)
 */

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const image = req.file ? `/image/${req.file.filename}` : "";
    const {
      name,
      address,
      phoneNumber,
      description,
      socialMedia,
      city,
      status,
      adminId, // Додано поле для оновлення адміна
    } = req.body;

    const userId = req.user.id; // ID користувача, який робить запит
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Користувач не авторизований" });
    }
    // Перевірка, чи філія існує
    const existingBranch = await prisma.branch.findUnique({
      where: { id },
    });

    if (!existingBranch) {
      return res.status(404).json({ message: ERRORS.BRANCH_NOT_FOUND });
    }

    // Перевірка прав доступу
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || (user.role !== "SUPERADMIN" && user.role !== "ADMIN")) {
      return res.status(403).json({
        message: "Доступ заборонено: потрібна роль SUPERADMIN або ADMIN",
      });
    }

    // Якщо вказано adminId, перевіряємо, чи користувач є ADMIN
    if (adminId) {
      const admin = await prisma.user.findUnique({
        where: { id: adminId },
      });

      if (!admin || admin.role !== "ADMIN") {
        return res.status(400).json({ message: "Користувач не є адміном" });
      }
    }
    if (req.file && existingBranch.image) {
      const oldImagePath = path.join(__dirname, "..", existingBranch.image);
      fs.unlink(oldImagePath, (err) => {
        if (err) console.error("Error deleting old image:", err);
      });
    }
    // Оновлення філії

    const updateData = {
      ...(name && { name }),
      ...(address && { address }),
      ...(phoneNumber && { phoneNumber }),
      ...(description && { description }),
      ...(socialMedia && { socialMedia: JSON.stringify(socialMedia) }),
      ...(city && { city }),
      ...(status && { status }),
      ...(adminId && { admin: { connect: { id: adminId } } }),
      ...(image && { image }),
    };
    const updatedBranch = await prisma.branch.update({
      where: { id },
      data: updateData,
      include: {
        superAdmin: { select: { id: true, name: true } },
        admin: { select: { id: true, name: true } },
      },
    });

    return res.json(updatedBranch);
  } catch (error) {
    console.error("Помилка при оновленні філії:", error);
    return res.status(500).json({
      message: "Внутрішня помилка сервера",
      error: error.message,
    });
  }
};
/**
 * @route DELETE /api/branches/remove/:id
 * @desc Видалити філію
 * @access Private (SUPERADMIN)
 */
const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id; // ID користувача, який робить запит

    // Перевірка, чи філія існує
    const existingBranch = await prisma.branch.findUnique({
      where: { id },
    });

    if (!existingBranch) {
      return res.status(404).json({ message: ERRORS.BRANCH_NOT_FOUND });
    }

    // Перевірка, чи користувач є SUPERADMIN
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || user.role !== "SUPERADMIN") {
      return res
        .status(403)
        .json({ message: "Доступ заборонено: потрібна роль SUPERADMIN" });
    }

    // Видалення філії
    await prisma.branch.delete({ where: { id } });
    return res.status(204).send(); // No Content
  } catch (error) {
    console.error("Помилка при видаленні філії:", error);
    return next(error);
  }
};

module.exports = {
  all,
  getBranch,
  add: [validateInput(createBranchSchema), add],
  edit: [validateInput(updateBranchSchema), edit],
  remove,
};
