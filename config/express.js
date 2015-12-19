//Load the module dependencies
var express = require('express');

//Define the express configuration
module.exports = function() {

    //Create a new express instance
    var app = express();

    //configure body parser
    app.set('json spaces',4);

    //add access control response
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // Load the routing files
    require('../app/routes/products.routes.js')(app);
    require('../app/routes/carts.routes.js')(app);

    // Configure static file serving
    app.use(express.static('./public'));

    //Return the Express application instance
    return app;
};
