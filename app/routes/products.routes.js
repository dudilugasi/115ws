// Load the module dependencies
var products = require('../../app/controllers/products.controller');

// Define the recipes routes module
module.exports = function(app) {
    app.get('/get_all_products',products.getProducts);
    app.get('/group_by_category',products.getProductsDividedByCat);
    //app.get('/upload',products.upload);

};


