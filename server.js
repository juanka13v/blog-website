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

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(helmet());
app.use(morgan("tiny"));
app.use("/public", express.static("./public/"));

app.set("view engine", "ejs");

// Routes
app.use("/", mainRoute);
app.use("/", postRoute);
app.use("/", authorRoute);
app.use("/", categoryRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
