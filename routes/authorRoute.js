const express = require("express");
const router = express.Router();
const {
  getAuthor,
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

router.route("/authors").get(getAllAuthors).post(createAuthor);
router.route("/author/:id").get(getAuthor).put(updateAuthor).delete(deleteAuthor);

module.exports = router;
