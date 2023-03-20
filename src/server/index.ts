import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import Snippets from './app/utils/Snippets';
const bodyParser = require('body-parser');
const morgan = require('morgan');

//require('dotenv/config');
dotenv.config();

const app = express();

const corsOptions = {
	origin: 'http://localhost:8091'
};

app.use(cors(corsOptions));

app.options('*',cors());

// Middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(morgan('tiny'));
app.use('/public/uploads', express.static( __dirname + '/public/uploads'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
require('./app/routes/SetupRoutes.ts')(app);



const api = process.env.API_URL;
const categoriesRoute = require('./app/routes/ecommerce/categories');
const productRoute = require('./app/routes/ecommerce/products');
const userRoute = require('./app/routes/ecommerce/users');
const orderRoute = require('./app/routes/ecommerce/orders');

// Routes

const apiUrlProducts = `${api}/products`;
const apiUrlCategories = `${api}/products`;
const apiUrlUsers = `${api}/products`;
const apiUrlOrders = `${api}/products`;

// @ts-ignore
app.use(apiUrlProducts, productRoute);
// @ts-ignore
app.use(apiUrlCategories, categoriesRoute);
// @ts-ignore
app.use(apiUrlUsers, userRoute);
// @ts-ignore
app.use(apiUrlOrders, orderRoute);
// @ts-ignore

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