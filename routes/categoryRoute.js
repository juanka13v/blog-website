const express = require("express");
const router = express.Router();
const {
  getCategory,
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.route("/categories").get(getAllCategory).post(createCategory);
router
  .route("/category/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
