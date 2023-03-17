const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.resourceItems = require("./ResourceItemsModel.ts")(mongoose);
db.user = require("./UserModel.ts");
db.role = require("./RoleModel.ts");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;