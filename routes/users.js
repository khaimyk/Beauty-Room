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
} = require("../controllers/users.js");
const { auth } = require("../middleware/auth.js");

/* /api/user/login */
router.post("/login", login);

/* /api/user/register */
router.post("/register", upload.single("image"), register);
/* /api/user/current */
router.get("/current", current);
router.get("/", auth, getAll);
router.put("/edit/:id", auth, upload.single("image"), edit);
router.delete("/remove/:id", auth, remove);

module.exports = router;
