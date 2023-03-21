
const mongoose = require("mongoose");

const authenticationModelSchemaStructure: any = {
	firstName: String,
	lastName: String,
	username: String,
	emailAddress: String,
	password: String,
	phoneNumber: String,
	photoURL: String,
	roles: [],
};

const authenticationModelSchema = new mongoose.Schema( authenticationModelSchemaStructure, { timestamps: true } );

authenticationModelSchema.pre('validate', () => {
	console.log('this gets printed first.');
});

authenticationModelSchema.post('validate', () => {
	console.log('this gets printed second....');
});

authenticationModelSchema.pre('save', () => {
	console.log('this gets printed third.');
});

authenticationModelSchema.post('save', () => {
	console.log('this gets printed fourth.');
});

let queryStartedAt = 0;

authenticationModelSchema.pre('find', () => {
	queryStartedAt = Date.now();
});

authenticationModelSchema.post('find', (res:any) => {
	console.log(res instanceof mongoose.Query); // true
	// prints returned documents
	console.log('find() returned ' + JSON.stringify(res));
	// prints number of milliseconds the query took
	console.log('find() took ' + (Date.now() - queryStartedAt) + ' milliseconds');
});

const AuthenticationModel = mongoose.model(
	"User",
	authenticationModelSchema
);

export default AuthenticationModel;
