const express = require("express");
const router = express.Router();
const upload = require("../utils/upload");
const {
  login,
  register,
  current,
  getAll,
  edit,
  remove,
  getById,
  updateRole,
  forgotPassword,
  resetPassword,
} = require("../controllers/users.js");
const { auth, checkRole } = require("../middleware/auth.js");

router.post("/login", login);

router.post("/register", upload.single("image"), register);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.get("/current", auth, current);
router.get("/:id", getById);
router.get("/", getAll);
router.put("/edit/:id", auth, upload.single("image"), edit);
router.put("/role/:id", auth, checkRole(["ADMIN", "SUPERADMIN"]), updateRole);
router.delete("/remove/:id", auth, checkRole(["ADMIN", "SUPERADMIN"]), remove);

module.exports = router;
