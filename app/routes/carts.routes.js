// Load the module dependencies
var carts = require('../../app/controllers/carts.controller');

// Define the recipes routes module
module.exports = function(app) {

    app.get('/carts',carts.getCarts);
    app.get('/popular_products',carts.getPopularProducts);
    app.get('/most_rejected_products',carts.getRejectedProducts);
    app.get('/favorite_relative',carts.getFavoriteRelative);
    app.get('/favorite_offer',carts.getFavoriteOffer);
    app.get('/carts/count/passed',carts.countPassed);
    app.get('/carts/count/failed',carts.countFailed);
    app.get('/carts/count/male',carts.countMale);
    app.get('/carts/count/female',carts.countFemale);

};

