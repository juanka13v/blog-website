const Post = require("../models/Post");

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

route.get("/posts/:titlepost", function (req, res) {
  res.render("posts");
});

route.post("/", async (req, res) => {
  const title = req.body.postTitle;
  const description = req.body.postDescription;

  if (title !== "" && description !== "") {
    let post = new Post({
      postTitle: req.body.postTitle,
      postDescription: req.body.postDescription,
    });

    await post.save();
  } else {
    res.render("makepost", { title, description });
  }
});

module.exports = route;
