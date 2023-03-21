import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

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

const Snippets = require('./app/utils/Snippets');

const init = () => {
	
	Snippets.log.info('Initializing ...');

	Snippets.databaseHelper.MongooseDBConnect(
		() => {
			Snippets.log.info('Successfully connected to MongoDB.');
			startServer();
		},
		(err: any) => {
			Snippets.log.info('Connection error');
			console.error('Connection error', err);
			process.exit();
		},
	);

}

const startServer = () => {

	Snippets.serverHelper.startNodeJSExpressServer(
		app,
		(server:any, port:number) => {
			Snippets.log.info(`Server started at port ${port}`);
		},
		(err: any) => {
			Snippets.log.info('Server Connection error');
			console.error('Server cConnection error', err);
			process.exit();
		}
	);

}

init();