const mongoose = require("mongoose");
var mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxlength: 255 },
  description: { type: String, maxlength: 600 },
  image: { type: String, maxlength: 255 },
  slug: { type: String },
  embed: { type: String },
});

Course.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("Course", Course);
