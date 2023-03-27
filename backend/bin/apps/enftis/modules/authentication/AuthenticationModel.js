"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
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
        required: false,
    },
    password: {
        type: String,
        trim: true,
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
    roles: {
        default: {
            type: String,
            enum: ['root', 'super-admin', 'tenant-admin', 'editor', 'moderator', 'observer', 'subscriber', 'guest'],
            lowercase: true,
            trim: true,
            required: false,
        },
        permissions: {
            type: [mongoose_1.Schema.Types.Mixed],
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
    // prints returned documents
    console.log('find() returned ' + JSON.stringify(res));
});
console.log('Connecting to database');
const cxnString = process.env.DATABASE_URL || 'mongodb://localhost:27017/dovellous';
const cxn = (0, mongoose_1.createConnection)(cxnString);
console.log('Database connected!', cxnString);
// Create a Model.
// @ts-ignore
const UserModel = cxn.model('UserModel', userSchema);
exports.UserModel = UserModel;
