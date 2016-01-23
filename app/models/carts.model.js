
//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'productSchema'
var cartSchema = new Schema({
    products : [String],
    passed : Boolean,
    quit : Boolean,
    sex : String,
    city : String,
    answeredSMS : [String],
    rejectedSMS : [String],
    rejectedProducts: [String],
    answeredOffer: [int]
},{collection: 'carts'});

// Create the 'Recipe' model out of the 'recipeSchema'
mongoose.model('Cart',cartSchema);
