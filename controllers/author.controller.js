const Author = require('../models/Author')
const {navs} = require('../helpers/navGenerator')

const author = async (req, res) => {
  const id = req.params.id;
  const author = await Author.findById(id).populate({
    path: "posts",
    populate: {
      path: "author",
      model: "Author",
    },
  });
  const totalPosts = author.posts.length;
  const info = {};

  info.totalPosts = totalPosts;
  info.page = Number(req.query.page) || 1;
  info.limit = Number(req.query.limit) || 10;
  info.pages = info.totalPosts / info.limit;
  info.next = info.page == info.pages ? null : info.page + 1;
  info.prev = info.page == 1 ? null : info.page - 1;
  info.nav = navs(info.page, info.pages);

  try {
    res.render("authorPage", { title: "Blog | Author", author, info });
  } catch (e) {
    res.render("errorPage", { title: "Error" });
  }
};

module.exports = {
    author
}
