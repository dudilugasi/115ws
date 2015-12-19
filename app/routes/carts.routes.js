// Load the module dependencies
var carts = require('../../app/controllers/carts.controller');

// Define the recipes routes module
module.exports = function(app) {
    app.get('/statistics.sex',carts.getSexData);

};

