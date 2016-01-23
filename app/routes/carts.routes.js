// Load the module dependencies
var carts = require('../../app/controllers/carts.controller');

// Define the recipes routes module
module.exports = function(app) {
    app.get('/statistics.sex',carts.getSexData);
    app.get('/popular_products',carts.getPopularProducts);
    app.get('/most_rejected_products',carts.getRejectedProducts);
    app.get('/favorite_relative',carts.getFavoriteRelative);
    app.get('/favorite_offer',carts.getFavoriteOffer);

};

