const Post = require("../models/Post");
const Author = require("../models/Author");
const Category = require("../models/Category");
const Tag = require("../models/Tag");
const { createInfo } = require("../helpers/info");

const showPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id).populate("author");
    res.render("post", { title: "Blog | Post", post });
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};

const showPosts = async (req, res) => {
  try {
    const options = {};
    var regex = new RegExp(req.query.search, "i");

    if (req.query.tag) options.tags = req.query.tag;
    if (req.query.search) options.title = regex;

    const totalPosts = await Post.find(options).count();
    const info = createInfo(totalPosts, req);

    const posts = await Post.find(options)
      .populate("author")
      .limit(info.limit)
      .skip((info.page - 1) * info.limit);

    res.render("search", { title: "Blog | Search", posts, info });
  } catch (e) {
    console.log(e);
    res.render("errorPage", { title: "Blog | Error" });
  }
};

const showCreatePost = async (req, res) => {
  try {
    const categories = await Category.find();
    const tags = await Tag.find();
    const authors = await Author.find();

    res.render("create-post", {
      title: "Blog | create post",
      tags,
      authors,
      categories,
    });
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};

const createPost = async (req, res) => {
  try {
    let min = parseInt(req.body.min);
    req.body.min = min;

    const post = new Post(req.body);
    const author = await Author.updateOne(
      { _id: post.author },
      { $push: { posts: post._id } }
    );

    const savePost = await post.save();

    res.redirect(`/posts/${post._id}`);
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};

const searchPosts = async (req, res) => {
  try {
    const search = req.query.search
    console.log(search);
    // const totalPosts = await Post.find(options).count();
    // const info = createInfo(totalPosts, req);

    // const posts = await Post.find()
    //   .populate("author")
    //   .limit(info.limit)
    //   .skip((info.page - 1) * info.limit);

    // res.render("search", { title: "Blog | Search", posts, info });
    res.render("errorPage", { title: "Blog | Error" });
  } catch (e) {
    console.log(e);
    res.render("errorPage", { title: "Blog | Error" });
  }
};

module.exports = {
  showPost,
  showPosts,
  showCreatePost,
  createPost,
  searchPosts
};
