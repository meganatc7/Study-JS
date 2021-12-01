const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  // title: String,
  title: {
    type: String,
    requried: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
