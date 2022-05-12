const route = require("express").Router();
const {
  home,
  about,
  contact,
  dashboard,
  post,
  categories,
  category,
  tags,
  posts
} = require("../controllers/mainController");

route.get("/", home);
route.get("/about", about);
route.get("/contact", contact);
route.get("/dashboard", dashboard);
route.get("/post", post);
route.get("/categories", categories);
route.get("/category/:name", category);
route.get("/tags", tags);
route.get("/posts", posts);


module.exports = route;
