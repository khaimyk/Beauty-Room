const express = require("express");
const { all, getReview, add, remove } = require("../controllers/reviews.js");
const router = express.Router();

router.get("/", all);
router.get("/:id", getReview);
router.post("/add", add);
router.delete("/remove/:id", remove);

module.exports = router;
