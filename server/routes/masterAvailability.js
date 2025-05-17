const express = require("express");
const router = express.Router();
const {
  saveAvailability,
  getMasterAvailability,
  getAllMastersAvailability,
} = require("../controllers/masterAvailability.js");
const { auth, checkRole } = require("../middleware/auth.js");

router.get("/", getAllMastersAvailability);
router.get("/:id", getMasterAvailability);
router.post(
  "/save",
  auth,
  checkRole(["ADMIN", "MASTER", "SUPERADMIN"]),
  saveAvailability
);

module.exports = router;
