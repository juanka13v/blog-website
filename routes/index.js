const route = require("express").Router();
const { home, about, contact, dashboard } = require("../controllers/mainController");

route.get("/", home);
route.get("/about", about);
route.get("/contact", contact);
route.get("/dashboard", dashboard);

// route.get("/makepost", function (req, res) {
//   res.render("makepost");
// });

// route.get("/posts/:titlepost", function (req, res) {
//   res.render("posts");
// });

// route.post("/", async (req, res) => {
//   const title = req.body.postTitle;
//   const description = req.body.postDescription;

//   if (title !== "" && description !== "") {
//     let post = new Post({
//       postTitle: req.body.postTitle,
//       postDescription: req.body.postDescription,
//     });

//     await post.save();
//   } else {
//     res.render("makepost", { title, description });
//   }
// });

module.exports = route;
