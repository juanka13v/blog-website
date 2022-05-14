const route = require("express").Router();
const { about, contact } = require("../controllers/static.controller");
const { post, posts, createPost } = require("../controllers/post.controller");
const { categories, category } = require("../controllers/categories.controller");
const { author, authors } = require("../controllers/author.controller");
const {
  home,
  dashboard,
  tags,
} = require("../controllers/main.controller");

route.get("/", home);
route.get("/about", about);
route.get("/contact", contact);
route.get("/tags", tags);
route.get("/dashboard", dashboard);

route.get("/posts", posts);
route.get("/posts/:id", post);
route.post("/create-post", createPost);

route.get("/categories", categories);
route.get("/categories/:name", category);

route.get("/authors", authors);
route.get("/author/:id", author);

module.exports = route;
