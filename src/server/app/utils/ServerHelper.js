const startNodeJSExpressServer = (app, callbackSuccess, callbackError) => {
    
    // set port, listen for requests
    const PORT = process.env.PORT || 8080;

    try {
            
        app.listen(PORT, (httpServer) => {

            callbackSuccess(httpServer, PORT);

        });

    } catch (err) {

        callbackError(err)
        
    }

};

module.exports = {startNodeJSExpressServer};