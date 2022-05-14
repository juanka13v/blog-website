const Post = require("../models/Post");
const { navs } = require("../helpers/navGenerator");

const post = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id).populate("author");
    res.render("post", { title: "Blog | Post", post });
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};

const posts = async (req, res) => {
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
    info.pages = (info.totalPosts <= info.limit) ? 1 : Math.floor(info.totalPosts / info.limit) + 1;
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

const createPost = (req, res) => {
  console.log(req.body);
  res.redirect('/dashboard')
}

module.exports = {
  post,
  posts,
  createPost
};
