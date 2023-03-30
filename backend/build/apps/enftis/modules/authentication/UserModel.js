"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_plugin_autoinc_1 = require("mongoose-plugin-autoinc");
const modelName = 'User';
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: false,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        min: 6,
        max: 16
    },
    emailAddress: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        select: false,
        minlength: 8,
        required: false,
    },
    phoneNumber: {
        mobile: {
            type: String,
            trim: true,
            required: false,
        },
        work: {
            type: String,
            trim: true,
            required: false,
        },
    },
    photoURL: {
        type: String,
        trim: true,
        required: false,
    },
    accessLevels: new mongoose_1.Schema({
        defaultRole: {
            type: String,
            enum: ['root', 'super-admin', 'tenant-admin', 'editor', 'moderator', 'observer', 'subscriber', 'guest'],
            default: 'subscriber',
            lowercase: true,
            trim: true,
            required: true,
        },
        roles: {
            type: mongoose_1.Schema.Types.Mixed,
            default: 'subscriber',
            lowercase: true,
            trim: true,
            required: false,
        },
        permissions: {
            type: mongoose_1.Schema.Types.Mixed,
            lowercase: true,
            trim: true,
            required: false,
        }
    }),
    organization: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Organization'
    },
    firebaseUserData: new mongoose_1.Schema({
        uid: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        displayName: {
            type: String,
            required: true,
            trim: true
        },
        phoneNumber: {
            type: String,
            required: false,
            trim: true
        },
        photoURL: {
            type: String,
            required: false,
            trim: true
        },
    })
}, {
    timestamps: true
});
userSchema.plugin(mongoose_plugin_autoinc_1.autoIncrement, { model: modelName, field: 'userId' });
userSchema.pre('validate', () => {
});
userSchema.post('validate', () => {
});
userSchema.pre('save', () => {
});
userSchema.post('save', () => {
});
userSchema.post('find', (res) => {
    console.log('find() returned ' + JSON.stringify(res));
});
const UserModel = (0, mongoose_1.model)(modelName, userSchema);
exports.UserModel = UserModel;
// Explicitly create the collection before using it
// so the collection is capped.
UserModel.createCollection();
