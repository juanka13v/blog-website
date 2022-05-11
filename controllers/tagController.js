const Tag = require("../models/Tag");

const getTag = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id)
    res.status(200).json({ msg: "good", tag });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(202).json({ msg: "good", tags });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const createTag = async (req, res) => {
  const newTag = new Tag(req.body);

  try {
    const saveTag = await newTag.save();

    res.status(201).json({ msg: "creado", tag: saveTag });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const updateTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "update", update: tag });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const deleteTag = async (req, res) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);

    if (!tag) response.status(404).send("No item found");
    res.status(200).json({ msg: "elinated" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getTag,
  getAllTags,
  createTag,
  updateTag,
  deleteTag,
};