module.exports = {
    UserModel : require("./UserModel.ts")(require("mongoose")),
    RoleModel : require("./RoleModel.ts")(require("mongoose")),
    ResourceItemsModel : require("./ResourceItemsModel.ts")(require("mongoose")),
    ROLES: ["user", "admin", "moderator"],
};
