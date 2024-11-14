const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
  all,
  getCategory,
  add,
  edit,
  remove,
} = require("../controllers/categories.js");

router.get("/", auth, all);
router.get("/:id", auth, getCategory);
router.post("/add", auth, add);
router.put("/edit/:id", auth, edit);
router.delete("/remove/:id", auth, remove);

module.exports = router;
