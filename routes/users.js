const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ users: [{ name: "Sara" }] });
});

module.exports = router;
