const express = require("express");
const router = express.Router();
const {
  getTag,
  getAllTags,
  createTag,
  updateTag,
  deleteTag,
} = require("../controllers/tag.api.controller");

router.route("/tags").get(getAllTags).post(createTag);
router
  .route("/tag/:id")
  .get(getTag)
  .put(updateTag)
  .delete(deleteTag);

module.exports = router;
