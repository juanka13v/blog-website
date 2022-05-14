require("dotenv").config({ path: "./config.env" });
require("./models/db");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3000;


const mainRoute = require("./routes/main.route.");
const apiPostRoute = require("./routes/post.api.route");
const apiAuthorRoute = require("./routes/author.api.route");
const apiCategoryRoute = require("./routes/category.api.route");
const apiTagRoute = require("./routes/tag.api.route");


const { formatDate } = require("./helpers/changeDate");
const Post = require("./models/Post");


const app = express();

app.locals.formatDate = formatDate;

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.set("view engine", "ejs");

// Routes
app.use("/api/v1", apiPostRoute);
app.use("/api/v1", apiAuthorRoute);
app.use("/api/v1", apiCategoryRoute);
app.use("/api/v1", apiTagRoute);

app.use("/public", express.static("./public/"));


app.use("/", mainRoute);

app.get("/test", async (req, res) => {
  const id = '627fc9c913f763bd3a5377e4'
  try {
    const post = await Post.findById(id);
    res.render("test", {title: "test", post})
  } catch (e) {
    console.log(e);
  }
})

app.get("*", function (req, res) {
  res.status(404).render("404", { title: "Blog | Page not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
