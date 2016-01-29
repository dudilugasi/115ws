// Load the module dependencies
var mongoose = require('mongoose'),
        Products = mongoose.model('Product'),
        url = require('url'),
        util = require('./util.controller');

//Creates a method that will send all the ingredients
exports.getProducts = function (req, res) {
    //get from each recipe the ingredients and group in by categories
    Products.find().where().exec(function (err, data) {
        if (err) {
            // If there was an error send the error message
            return res.status(400).send({
                message: util.getErrorMessage(err)
            });
        }
        else {
            // Send a JSON representation of the ingredients
            res.status(200).json(data);
        }
    });
};

exports.getProductsDividedByCat = function (req, res) {
    Products.aggregate([
        {
            $group:
                    {
                        _id: "$category",
                        items: {$push: "$$ROOT"}
                    }
        }
    ])
            .exec(function (err, data) {
                if (err) {
                    // If there was an error send the error message
                    return res.status(400).send({
                        message: util.getErrorMessage(err)
                    });
                }
                else {
                    // Send a JSON representation of the ingredients
                    res.status(200).json(data);
                }
            });
};