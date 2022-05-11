require("dotenv").config({ path: "./config.env" });
require("./models/db");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const mainRoute = require("./routes/index");
const postRoute = require("./routes/postRoute");
const authorRoute = require("./routes/authorRoute");
const categoryRoute = require("./routes/categoryRoute");
const tagRoute = require("./routes/tagRoute");
const { formatDate } = require("./helpers/changeDate");

const Category = require('./models/Category');

const app = express();

app.locals.formatDate = formatDate;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use("/public", express.static("./public/"));

app.set("view engine", "ejs");

// Routes
app.use("/", mainRoute);
app.use("/api/v1", postRoute);
app.use("/api/v1", authorRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", tagRoute);

app.get("/test", async (req, res) => {
  const categories = await Category.find();

  res.render("test", { title: "Blog | Test", categories });
});

app.get("*", function (req, res) {
  res.status(404).render("404", { title: "Blog | Page not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
