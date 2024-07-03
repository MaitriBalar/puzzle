const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ansSchema = new Schema({
  image: {
    type:String
  },
  ans: {
    type: String,
    required: true,
  },
});

const puzzle = mongoose.model("puzzle", ansSchema);

module.exports = puzzle;
