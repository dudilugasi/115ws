
//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var giftItemSchema = new Schema({
    name: String,
    price: Number
});
// Define a new 'productSchema'
var giftSchema = new Schema({
    id: Number,
    text: String,
    popup: Boolean,
    title: String,
    triggerItem: String,
    giftItem: [giftItemSchema],
    gift: Boolean,
    image: String
},{collection: 'gifts'});

// Create the 'Recipe' model out of the 'recipeSchema'
mongoose.model('Gift',giftSchema);