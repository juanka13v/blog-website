const { Schema, model } = require("mongoose");
const {marked} = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

const postSchema = Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
  markdown: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  category: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  sanitizedHtml: {
    type: String,
  },
});

postSchema.pre("validate", function (next) {
  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
  }

  next();
});

module.exports = model("Post", postSchema);
