const Category  = require('../models/Category')
const Post  = require('../models/Post')
const {navs}  = require('../helpers/navGenerator')

const categories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("categories", { title: "Blog | Categories", categories });
  } catch (error) {
    res.render("errorPage", { title: "Blog | error" });
  }
};

const category = async (req, res) => {
  try {
    const name = req.params.name;
    const totalPosts = await Post.find({
      category: { $regex: `^${name}$`, $options: "i" },
    }).count();

    const info = {};
    info.name = name;
    info.totalPosts = totalPosts;
    info.page = Number(req.query.page) || 1;
    info.limit = Number(req.query.limit) || 10;
    info.pages = Math.floor(info.totalPosts / info.limit) + 1;
    info.next = info.page == info.pages ? null : info.page + 1;
    info.prev = info.page == 1 ? null : info.page - 1;
    info.nav = navs(info.page, info.pages);

    const posts = await Post.find({
      category: { $regex: `^${name}$`, $options: "i" },
    })
      .populate("author")
      .limit(info.limit)
      .skip((info.page - 1) * info.limit);

    res.render("category", { title: `Blog | ${name}`, info, posts });
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};


module.exports = {
    categories,
    category
}
