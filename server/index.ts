import {RequestHandler} from "express";

const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv/config');

const {expressAuthJWT} = require('./app/middlewares/AuthJWT.ts');
const errorHandler = require('./app/helpers/error-handler');


const DBConfig = require("./app/config/DBConfig.ts");

const db = require("./app/models/index.ts");

const app = express();

var corsOptions = {
    origin: "http://localhost:8091"
};

app.use(cors(corsOptions));

app.options('*',cors());

// Middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(morgan('tiny'));
app.use(expressAuthJWT());
app.use('/public/uploads', express.static( __dirname + '/public/uploads'));
app.use(errorHandler);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes
require("./app/routes/AuthRoutes.ts")(app);
require("./app/routes/UserRoutes.ts")(app);
require("./app/routes/ResourceItemsRoutes.ts")(app);

const api = process.env.API_URL;
const categoriesRoute = require('./app/routes/ecommerce/categories');
const productRoute = require('./app/routes/ecommerce/products');
const userRoute = require('./app/routes/ecommerce/users');
const orderRoute = require('./app/routes/ecommerce/orders');

// Routes

class RouteParameters<T> {
    string;
}

const apiUrlProducts: RequestHandler<RouteParameters<string>> | RouterItemUrl = `${api}/products`;
const apiUrlCategories: RequestHandler<RouteParameters<string>> | RouterItemUrl = `${api}/products`;
const apiUrlUsers: RequestHandler<RouteParameters<string>> | RouterItemUrl = `${api}/products`;
const apiUrlOrders: RequestHandler<RouteParameters<string>> | RouterItemUrl = `${api}/products`;

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
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Node.JS application." });
});

const Role = db.role;

mongoose.Promise = global.Promise;

mongoose
    .connect(`mongodb://${DBConfig.HOST}:${DBConfig.PORT}/${DBConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}
