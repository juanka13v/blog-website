const Post = require("../models/Post");
const { formatDate } = require("../helpers/changeDate");

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author");
    res.status(200).json({ msg: "good", post: post });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.count();
    console.log(posts);

    res.status(200).json({ msg: "good", posts });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const createPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savePost = await newPost.save();

    res.status(201).json({ msg: "creado", post: savePost });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "good", post: post });
  } catch (e) {
    res.status(500).json({ msg: "error", error: e });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) response.status(404).send("No item found");
    res.status(200).json({ msg: "elinated" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getPost,
  getAllPost,
  createPost,
  updatePost,
  deletePost,
};
