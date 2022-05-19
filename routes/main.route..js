const route = require("express").Router();
const { about, contact } = require("../controllers/static.controller");
const { showPost, showPosts, showCreatePost, createPost } = require("../controllers/post.controller");
const { categories, category } = require("../controllers/categories.controller");
const { author, authors, showCreateAuthor, createAuthor } = require("../controllers/author.controller");
const {
  home,
  tags,
} = require("../controllers/main.controller");

route.get("/", home);
route.get("/about", about);
route.get("/contact", contact);
route.get("/tags", tags);

route.get("/posts", showPosts);
route.get("/posts/:id", showPost);
route.get("/create-post", showCreatePost);
route.post("/create-post", createPost);

route.get("/categories", categories);
route.get("/categories/:name", category);

route.get("/authors", authors);
route.get("/author/:id", author);
route.get("/create-author", showCreateAuthor);
route.post("/create-author", createAuthor);

module.exports = route;
