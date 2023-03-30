"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_plugin_autoinc_1 = require("mongoose-plugin-autoinc");
const modelName = 'Client';
const clientSchema = new mongoose_1.Schema({
    clientDeviceId: {
        type: String,
        required: true,
        trim: true
    },
    clientDeviceName: {
        type: String,
        required: true,
        trim: true
    },
    clientDevicePubKey: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    clientDeviceUserAgent: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        min: 6,
        max: 16
    },
    clientId: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
    },
    clientSecret: {
        type: String,
        trim: true,
        select: false,
        minlength: 8,
        required: true,
    },
}, {
    timestamps: true
});
clientSchema.plugin(mongoose_plugin_autoinc_1.autoIncrement, { model: modelName, field: 'deviceId' });
clientSchema.pre('validate', () => {
});
clientSchema.post('validate', () => {
});
clientSchema.pre('save', () => {
});
clientSchema.post('save', () => {
});
clientSchema.post('find', (res) => {
    console.log('find() returned ' + JSON.stringify(res));
});
const ClientModel = (0, mongoose_1.model)(modelName, clientSchema);
exports.ClientModel = ClientModel;
// Explicitly create the collection before using it
// so the collection is capped.
ClientModel.createCollection();
