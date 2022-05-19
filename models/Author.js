const { Schema, model } = require("mongoose");

const authorSchema = Schema({
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  email: {
    type: String,
  }
});

module.exports = model("Author", authorSchema);
