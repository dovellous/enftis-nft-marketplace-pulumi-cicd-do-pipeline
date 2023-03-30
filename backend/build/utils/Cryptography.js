"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateKey = exports.publicKey = exports.decryptData = exports.encryptData = exports.sha256 = exports.md5 = void 0;
const crypto = require("crypto");
const fs = require('fs');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
    },
    privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
    },
});
exports.publicKey = publicKey;
exports.privateKey = privateKey;
const saveCertificates = () => {
    fs.writeFileSync("./cert/dvs.mern.services.public.pem", publicKey);
    fs.writeFileSync("./cert/dvs.mern.services.private.pem", privateKey);
};
fs.exists("./cert", (exists) => {
    if (!exists) {
        fs.mkdir("./cert", () => {
            saveCertificates();
        });
    }
    else {
        saveCertificates();
    }
});
const encryptData = (text) => {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};
exports.encryptData = encryptData;
const decryptData = (text) => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
};
exports.decryptData = decryptData;
const md5 = (data) => {
    const hash = crypto.createHash('md5');
    hash.update(data);
    return hash.digest('hex');
};
exports.md5 = md5;
const sha256 = (data) => {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
};
exports.sha256 = sha256;
