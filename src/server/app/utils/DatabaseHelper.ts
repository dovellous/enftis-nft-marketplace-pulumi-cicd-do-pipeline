import mongoose from 'mongoose';

import {MongooseConfig} from '../config/DBConfig';

const MongooseDBConnect = (callbackSuccess:any, callbackError:any) => {
    mongoose.Promise = global.Promise;
    mongoose.set('strictQuery', true);
    //@ts-ignore
    mongoose.connect(`mongodb://${MongooseConfig.HOST}:${MongooseConfig.PORT}/${MongooseConfig.DB}`, MongooseConfig.OPTIONS)
      .then(() => callbackSuccess)
      .catch((err: any) => {
        callbackError(err);
        console.error('Mongoose DB Connection Error', err);
      });
};

export {MongooseDBConnect};