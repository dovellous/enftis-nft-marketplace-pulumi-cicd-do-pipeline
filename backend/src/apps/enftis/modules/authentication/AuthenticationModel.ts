import {Schema} from 'mongoose';

const mongoose = require("mongoose");

interface IUser {
	firstName: String;
	lastName?: String;
	username: Schema.Types.Mixed;
	emailAddress: String;
	password: String;
	phoneNumber?: Schema.Types.Mixed;
	photoURL?: String;
	roles?: Schema.Types.Mixed;
	updated?: Schema.Types.Mixed;
	age?: Number;
}

const userSchema = new mongoose.Schema<IUser>({
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
			type: [Schema.Types.Mixed],
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

userSchema.post('find', (res: any) => {
	console.log('find() returned ' + JSON.stringify(res));
});

const UserModel =  mongoose.model<IUser>('UserModel', userSchema);

// Explicitly create the collection before using it
// so the collection is capped.
UserModel.createCollection();

export {IUser, UserModel};
