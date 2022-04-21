require("dotenv").config({ path: "./config.env" });
require("./models/db");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const mainRoute = require("./routes/index");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use("/dist", express.static("./dist/"));

app.set("view engine", "ejs");

// Routes
app.use("/", mainRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
