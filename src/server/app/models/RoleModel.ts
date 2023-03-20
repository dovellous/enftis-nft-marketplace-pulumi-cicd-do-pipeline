const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  name: String
});

const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;
