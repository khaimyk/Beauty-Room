const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth.js");
const {
  all,
  service,
  add,
  edit,
  remove,
} = require("../controllers/services.js");

router.get("/", all);
router.get("/:id", service);
router.post("/add", auth, add);
router.put("/edit/:id", auth, edit);
router.delete("/remove/:id", auth, remove);

module.exports = router;
