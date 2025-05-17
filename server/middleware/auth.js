const { prisma } = require("../prisma/prisma-client.js");

const jwt = require("jsonwebtoken");
const { ERRORS } = require("../utils/constants.js");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Немає токена, авторизація заборонена" });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
    if (!user) {
      return res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
  }
};
const checkRole = (roles) => {
  return (req, res, next) => {
    // Use req.user instead of undefined 'user' variable
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Доступ заборонено." });
    }

    // Check for branch requirement for ADMIN/MASTER roles
    if (
      (req.user.role === "ADMIN" || req.user.role === "MASTER") &&
      !req.user.branchId
    ) {
      return res.status(403).json({ message: ERRORS.BRANCH_REQUIRED });
    }

    next();
  };
};

module.exports = {
  auth,
  checkRole,
};
