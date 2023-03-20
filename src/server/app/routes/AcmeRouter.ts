var express = require('express');

var acmeRouter = express.Router();

acmeRouter.get('/', function(req: any, res: any){
    res.send('GET route on things.');
});

acmeRouter.post('/', function(req: any, res: any){
    res.send('POST route on things.');
});

//export this router to use in our index.js
export default acmeRouter;