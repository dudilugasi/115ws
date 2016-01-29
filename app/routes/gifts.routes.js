// Load the module dependencies
var gifts = require('../../app/controllers/gifts.controller');

// Define the recipes routes module
module.exports = function(app) {

    app.get('/gifts',gifts.getGifts);
    app.get('/gift',gifts.getGift);
};

