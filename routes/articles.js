const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.render("test", { text: "Hola Mundo" });
});

module.exports = router;
