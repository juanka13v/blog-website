const Author = require("../models/Author");

const getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate("posts");
    console.log(author);
    res.status(200).json({ msg: "good", author });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(202).json({ msg: "good", authors });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const createAuthor = async (req, res) => {
  const newAuthor = new Author(req.body);
  console.log(req.body);

  try {
    const saveAuthor = await newAuthor.save();

    res.status(201).json({ msg: "creado", post: saveAuthor });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "good", author });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    if (!post) response.status(404).send("No item found");
    res.status(200).json({ msg: "elinated" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAuthor,
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
