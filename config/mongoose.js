
// Load the module dependencies
var mongoose = require('mongoose');

// Define the Mongoose configuration
module.exports = function() {
    //Connect to MongoDB with Mongoose
    var db = mongoose.connect('mongodb://dudi:dudi@ds029615.mongolab.com:29615/115challenge');

    //Load the application models
    require('../app/models/products.model');
    require('../app/models/carts.model');
    require('../app/models/sms.model');
    require('../app/models/gifts.model');

    //Return the Mongoose connection instance
    return db;
};