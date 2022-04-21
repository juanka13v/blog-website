const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postTitle: {
    required: true,
    type: String,
  },
  postDescription: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
