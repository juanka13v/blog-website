const Category = require("../models/Category");
const Post = require("../models/Post");
const { navs } = require("../helpers/navGenerator");

const home = async (req, res) => {
  try {
    const totalPosts = await Post.find().count();
    const info = {};
    
    info.totalPosts = totalPosts;
    info.page = Number(req.query.page) || 1;
    info.limit = Number(req.query.limit) || 10;
    info.pages = info.totalPosts / info.limit;
    info.next = info.page == info.pages ? null : info.page + 1;
    info.prev = info.page == 1 ? null : info.page - 1;
    info.nav = navs(info.page, info.pages);

    console.log(info);
    
    const categories = await Category.find();
    const posts = await Post.find()
      .populate("author")
      .limit(info.limit)
      .skip((info.page - 1) * info.limit);

    res.render("home", { title: "Blog | Home", categories, posts, info });
  } catch (e) {
    console.log(e);
    res.render("errorPage", { title: "Blog | error" });
  }
};

const about = (req, res) => {
  res.render("about", { title: "Blog | About" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Blog | Contact" });
};

const dashboard = (req, res) => {
  res.render("dashboard", { title: "Blog | Dashboard" });
};

const post = (req, res) => {
  res.render("post", { title: "Blog | Post" });
};

const categories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("categories", { title: "Blog | Categories", categories });
  } catch (error) {
    res.render("errorPage", { title: "Blog | error" });
  }
};

const category = async (req, res) => {
  const name = req.params.name;
  const totalPosts = await Post.find({'category': {'$regex': `^${name}$`, $options: 'i'}}).count();
  console.log(req.query.page);
  const info = {};
  info.name = name;
  info.totalPosts = totalPosts;
  info.page = Number(req.query.page) || 1;
  info.limit = Number(req.query.limit) || 10;
  info.pages = Math.floor(info.totalPosts / info.limit) + 1
  info.next = info.page == info.pages ? null : info.page + 1;
  info.prev = info.page == 1 ? null : info.page - 1;
  info.nav = navs(info.page, info.pages);

  const posts = await Post.find({'category': {'$regex': `^${name}$`, $options: 'i'}})
    .populate("author")
    .limit(info.limit)
    .skip((info.page - 1) * info.limit);

  res.render("category", { title: `Blog | ${name}`, info, posts });
};

module.exports = {
  home,
  about,
  contact,
  dashboard,
  post,
  categories,
  category,
};
