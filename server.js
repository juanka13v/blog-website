require("dotenv").config({ path: "./config.env" });
require("./models/db");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const mainRoute = require("./routes/index");
const routeArticle = require("./routes/articles");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use("/public", express.static("./public/"));

app.set("view engine", "ejs");

// Routes
app.use("/", mainRoute);
app.use("/article", routeArticle);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
