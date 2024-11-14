const express = require("express");
const router = express.Router();
const {
  all,
  getBooking,
  add,
  edit,
  remove,
} = require("../controllers/bookings.js");

router.get("/", all);
router.get("/:id", getBooking);
router.post("/add", add);
router.put("/edit/:id", edit);
router.delete("/remove/:id", remove);

module.exports = router;
