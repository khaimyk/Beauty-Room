const express = require("express");
const router = express.Router();
const {
  all,
  getBooking,
  getBookingByUserId,
  add,
  edit,
  remove,
  confirmBooking,
  cancelBooking,
  getBookingLogs,
} = require("../controllers/bookings.js");

router.get("/", all);
router.get("/:id", getBooking);
router.get("/user/:userId", getBookingByUserId);
router.post("/add", add);
router.put("/edit/:id", edit);
router.delete("/remove/:id", remove);
router.put("/confirm/:id", confirmBooking);
router.put("/cancel/:id", cancelBooking);
router.get("/logs/:id", getBookingLogs);

module.exports = router;
