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

const cxnString = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/dovellous';

function connectDatabase() {
	
	const cxnDBInstance = mongoose.connection;
	
	cxnDBInstance.on("error", (error: any)=>{
		console.log("Connection Error!", error);
	});
	
	cxnDBInstance.once("open", () => {
		console.log("Connected successfully!");
	});
	
	const cxnOptions = {
		autoIndex: false, // Don't build indexes
		maxPoolSize: 10, // Maintain up to 10 socket connections
		serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
		socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
		family: 4, // Use IPv4, skip trying IPv6,
		useNewUrlParser: true,
		useUnifiedTopology: true
	};
	
	mongoose.connect(cxnString, cxnOptions).catch((err: any)=>{
		
		console.log('Connection Error: ', err);
		
		connectDatabase();
		
	});
	
}

connectDatabase();

const UserModel =  mongoose.model<IUser>('UserModel', userSchema);

// Explicitly create the collection before using it
// so the collection is capped.
UserModel.createCollection();

export {IUser, UserModel};
