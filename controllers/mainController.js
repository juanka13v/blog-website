const Category = require("../models/Category");
const Post = require("../models/Post");
const { changeDate } = require("../helpers/changeDate");

const home = async (req, res) => {
  try {
    const categories = await Category.find();
    const posts = await Post.find();

    res.render("home", { title: "Blog | Home", categories, posts });
  } catch (e) {
    console.log(e);
    res.render("home", { title: "Blog | Home" });
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

module.exports = {
  home,
  about,
  contact,
  dashboard,
  post,
};
