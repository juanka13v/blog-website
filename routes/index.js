const route = require("express").Router();

route.get("/", function (req, res) {
  res.render("home");
});

route.get("/about", function (req, res) {
  res.render("about");
});

route.get("/contact", function (req, res) {
  res.render("contact");
});

route.get("/makepost", function (req, res) {
  res.render("makepost");
});

route.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = route;
