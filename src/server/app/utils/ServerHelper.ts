const startNodeJSExpressServer:Function = (app:any, callbackSuccess:any, callbackError:any) => {
    
    // set port, listen for requests
    const PORT = process.env.PORT || 8080;

    try {
            
        app.listen(PORT, (httpServer:any) => {

            callbackSuccess(httpServer, PORT);

        });

    } catch (err:any) {

        callbackError(err)
        
    }

};

export {startNodeJSExpressServer};