const Category = require("../models/Category");

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate("author");
    res.status(200).json({ msg: "good", category });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(202).json({ msg: "good", categories });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const saveCategory = await newCategory.save();

    res.status(201).json({ msg: "creado", category: saveCategory });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "update", update: category });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) response.status(404).send("No item found");
    res.status(200).json({ msg: "elinated" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCategory,
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
