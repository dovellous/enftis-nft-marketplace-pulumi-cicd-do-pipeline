import {Schema, model, connect, createConnection} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
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

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
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
	// prints returned documents
	console.log('find() returned ' + JSON.stringify(res));
});

const userModelConnection = createConnection("mongodb://localhost:27017/dovellous")

// Create a Model.
// @ts-ignore
const UserModel = userModelConnection.model<IUser>('UserModel', userSchema);

run().catch(err => console.log(err));

async function run() {
	
	console.log('Connecting to database');
	
	const cxn:any = await connect('mongodb://127.0.0.1:27017/dovellous');
	
	console.log('Database connected!', cxn);
	
}

export {IUser, UserModel};
