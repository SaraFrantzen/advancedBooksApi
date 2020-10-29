const express = require("express");
const router = express.Router();

const booksCollection = [
  {
    author: "Sara",
    title: "Newbie on Node!",
  },
  {
    author: "Thomas",
    title: "Teaching Node",
  },
];

router.get("/", (req, res, next) => {
  res.json({ books: booksCollection });
});

module.exports = router;
