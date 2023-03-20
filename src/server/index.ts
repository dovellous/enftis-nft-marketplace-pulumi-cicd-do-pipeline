import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import Snippets from './app/utils/Snippets';

//require('dotenv/config');
dotenv.config();

const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
	origin: 'http://localhost:8091'
};

app.use(cors(corsOptions));

app.options('*',cors());

// Middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(morgan('tiny'));

// routes
require('./app/routes/SetupRoutes.ts')(app);

// simple route
app.get('/', (req, res) => {

	res.json({ message: 'Welcome to Node.JS application.' });

});

function init(appInstance: any){

	Snippets.databaseHelper.MongooseDBConnect(
		() => {
			console.log('Successfully connected to MongoDB.');
			startServer(appInstance);
		},
		(err: any) => {
			console.error('Connection error', err);
			process.exit();
		},
	);

}

function startServer(appInstance: any){

	Snippets.serverHelper.startNodeJSExpressServer(
		appInstance,
		(server:any, port:number) => {
			console.log(`Server started at port ${port}`);
		},
		(err: any) => {
			console.error('Server cConnection error', err);
			process.exit();
		}
	);

}

init(app);