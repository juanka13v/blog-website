const express = require("express");
const router = express.Router();
const {
  getPost,
  getAllPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.api.controller");

router.route("/posts").get(getAllPost).post(createPost);
router.route("/post/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
