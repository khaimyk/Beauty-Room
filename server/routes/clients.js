const express = require("express");
const router = express.Router();
const {
  all,
  getClient,
  add,
  edit,
  remove,
  searchClient,
} = require("../controllers/clients.js");

router.get("/", all);
router.get("/search", searchClient);
router.get("/:id", getClient);

router.post("/add", add);
router.put("/edit/:id", edit);
router.delete("/remove/:id", remove);

module.exports = router;
