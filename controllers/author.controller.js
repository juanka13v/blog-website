const Author = require("../models/Author");
const { createInfo } = require("../helpers/info");

const showAuthor = async (req, res) => {
  const id = req.params.id;
  const author = await Author.findById(id).populate({
    path: "posts",
    populate: {
      path: "author",
      model: "Author",
    },
  });
  const totalPosts = author.posts.length;
  const info = createInfo(totalPosts, req) 

  

  try {
    res.render("authorPage", { title: "Blog | Author", author, info });
  } catch (e) {
    res.render("errorPage", { title: "Error" });
  }
};

const showAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.render("authorsPage", { title: "Blog | Authors", authors });
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};

const showCreateAuthor = async (req, res) => {
  try {
    res.render("create-author", { title: "Blog | Create author" });
  } catch (e) {
    res.render("errorPage", { title: "Blog | Error" });
  }
};

const createAuthor = async (req, res) => {
  const author = new Author(req.body);

  try {
    console.log(req.body);
    await author.save();
    res.redirect(`/author/${author._id}`);
  } catch (e) {
    res.redirect("/create-author");
  }
};

module.exports = {
  showAuthor,
  showAuthors,
  showCreateAuthor,
  createAuthor,
};
