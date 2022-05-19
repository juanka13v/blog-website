const Post = require("../models/Post");
const Author = require("../models/Author");
const Category = require("../models/Category");
const Tag = require("../models/Tag");
const { navs } = require("../helpers/navGenerator");

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
    const info = {};
    const options = {};

    if (req.query.tag) {
      options.tags = req.query.tag;
    }

    const totalPosts = await Post.find(options).count();

    info.totalPosts = totalPosts;
    info.page = Number(req.query.page) || 1;
    info.limit = Number(req.query.limit) || 10;
    info.pages =
      info.totalPosts <= info.limit
        ? 1
        : Math.floor(info.totalPosts / info.limit) + 1;
    info.next = info.page == info.pages ? null : info.page + 1;
    info.prev = info.page == 1 ? null : info.page - 1;
    info.nav = navs(info.page, info.pages);
    info.tag = req.query.tag;

    const posts = await Post.find(options)
      .populate("author")
      .limit(info.limit)
      .skip((info.page - 1) * info.limit);

    res.render("search", { title: "Blog | Search", posts, info });
  } catch (e) {
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
      { $push: { posts: post._id } },
    );

    const savePost = await post.save();

    console.log(savePost);

    res.redirect(`/posts/${post._id}`);
  } catch (e) {
    res.render("errorPage", {title:"Blog | Error"})
  }
};

module.exports = {
  showPost,
  showPosts,
  showCreatePost,
  createPost,
};
