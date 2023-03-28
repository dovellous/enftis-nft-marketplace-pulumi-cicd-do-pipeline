"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
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
        default: {
            type: String,
            lowercase: true,
            trim: true,
            required: true,
        },
        firebaseUID: {
            type: String,
            trim: true
        }
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
        minlength: 8,
        required: true,
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
    roles: {
        default: {
            type: String,
            enum: ['root', 'super-admin', 'tenant-admin', 'editor', 'moderator', 'observer', 'subscriber', 'guest'],
            lowercase: true,
            trim: true,
            required: false,
        },
        permissions: {
            type: Array,
            lowercase: true,
            trim: true,
            required: false,
        }
    },
    updated: {
        type: Date,
        default: Date.now(),
        required: false,
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: false
    },
}, {
    timestamps: true,
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false // disable `autoCreate` since `bufferCommands` is false
});
userSchema.pre('validate', () => {
    console.log('this gets printed first.');
});
userSchema.post('validate', () => {
    console.log('this gets printed second....');
});
userSchema.pre('save', () => {
    console.log('this gets printed third.');
});
userSchema.post('save', () => {
    console.log('this gets printed fourth.');
});
userSchema.post('find', (res) => {
    console.log('find() returned ' + JSON.stringify(res));
});
const UserModel = (0, mongoose_1.model)('UserModel', userSchema);
exports.UserModel = UserModel;
// Explicitly create the collection before using it
// so the collection is capped.
UserModel.createCollection();
