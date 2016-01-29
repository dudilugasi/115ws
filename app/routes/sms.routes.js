// Load the module dependencies
var carts = require('../../app/controllers/sms.controller');

// Define the recipes routes module
module.exports = function(app) {
    app.get('/sms',carts.getSms);
};