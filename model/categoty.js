const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

const CATEGORY = mongoose.model("category", categorySchema);

module.exports = CATEGORY;
