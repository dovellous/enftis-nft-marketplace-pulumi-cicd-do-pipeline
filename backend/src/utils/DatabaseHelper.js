const mongoose = require('mongoose');

const {DBConfig} = require('../config/index');

const MongooseDBConnect = (callbackSuccess, callbackError) => {

    mongoose.Promise = global.Promise;
    mongoose.set('strictQuery', true);
    
    //console.log('XXXX 0001');

    mongoose.connect(`mongodb://${DBConfig.MongooseConfig.HOST}:${DBConfig.MongooseConfig.PORT}/${DBConfig.MongooseConfig.DB}`, DBConfig.MongooseConfig.OPTIONS)
      .then(() => {

        //console.log('XXXX 0002');
    
        callbackSuccess();
      })
      .catch((err) => {
        callbackError(err);
        console.error('Mongoose DB Connection Error', err);
      });
};

module.exports = {MongooseDBConnect};