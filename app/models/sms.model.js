
//Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Define a new 'productSchema'
var smsSchema = new Schema({
    status : String,
    children : Boolean,
    sex: String,
    itemId: [Number],
    from: String,
    text: String
},{collection: 'sms'});

// Create the 'Recipe' model out of the 'recipeSchema'
mongoose.model('sms',smsSchema);
