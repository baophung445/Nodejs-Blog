const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  description: String,
  image: Date,
  createAt: Date.now,
  updateAt: Date.now,
});
