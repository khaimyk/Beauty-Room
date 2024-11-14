const { prisma } = require("../prisma/prisma-client.js");

const jwt = require("jsonwebtoken");
const { ERRORS } = require("../utils/constants.js");

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];
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

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: ERRORS.AUTH_REQUIRED });
  }
};

module.exports = {
  auth,
};
