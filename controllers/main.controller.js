const Category = require("../models/Category");
const Post = require("../models/Post");
const Tag = require("../models/Tag");
const Author = require("../models/Author");
const { navs } = require("../helpers/navGenerator");

const home = async (req, res) => {
  try {
    const tags = await Tag.find();
    const totalPosts = await Post.find().count();
    const info = {};

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

    const categories = await Category.find();
    const posts = await Post.find()
      .populate("author")
      .limit(info.limit)
      .skip((info.page - 1) * info.limit);

    console.log(posts);

    res.render("home", { title: "Blog | Home", categories, posts, info, tags });
  } catch (e) {
    res.render("errorPage", { title: "Blog | error" });
  }
};

const dashboard = async (req, res) => {
  try {
    const categories = await Category.find();
    const tags = await Tag.find();
    const authors = await Author.find();

    // console.log(categories);
    // console.log(tags);
    // console.log(authors);

    res.render("create-post", {
      title: "Blog | Dashboard",
      tags,
      authors,
      categories,
    });
  } catch (e) {
    res.render('errorPage', {title: "Blog | Error"})
  }
};

const tags = async (req, res) => {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  try {
    const tags = await Tag.find();
    res.render("allTags", { title: "Blog | Tags", abc, tags });
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};

module.exports = {
  home,
  dashboard,
  tags,
};
