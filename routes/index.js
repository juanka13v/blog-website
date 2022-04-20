const route = require("express").Router();

route.get("/", function (req, res) {
  res.render("home");
});

module.exports = route;
