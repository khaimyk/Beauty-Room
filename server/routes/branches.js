const express = require("express");
const router = express.Router();
const { auth, checkRole } = require("../middleware/auth");
const upload = require("../utils/upload");
const {
  all,
  getBranch,
  add,
  edit,
  remove,
} = require("../controllers/branches.js");

// Дозволити доступ лише SUPERADMIN та ADMIN
const allowedRoles = ["SUPERADMIN", "ADMIN"];

// Отримати всі філії
router.get("/", all);

// Отримати філію за ID
router.get("/:id", getBranch);

// Створити нову філію (лише SUPERADMIN)
router.post(
  "/add",
  auth,
  checkRole(["SUPERADMIN"]),
  upload.single("image"),
  add
);

// Оновити філію (SUPERADMIN або ADMIN)
router.put(
  "/edit/:id",
  auth,
  upload.single("image"),
  checkRole(allowedRoles),
  edit
);

// Видалити філію (лише SUPERADMIN)
router.delete("/remove/:id", auth, checkRole(["SUPERADMIN"]), remove);

module.exports = router;
