
//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'productSchema'
var productSchema = new Schema({
    id: {type: Number, index: 1},
    name: String,
    pyramid : String,
    unit: String,
    price: Number,
    e_id: String,
    category : String
},{collection: 'products'});

// Create the 'Recipe' model out of the 'recipeSchema'
mongoose.model('Product',productSchema);