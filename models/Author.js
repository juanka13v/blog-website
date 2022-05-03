const { Schema, model } = require("mongoose");

const authorSchema = Schema({
  nameAuthor: {
    type: String,
    required: true,
  },
  img: {
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
  socials: [
    {
      type: String,
    },
  ],
});

module.exports = model("Author", authorSchema);
