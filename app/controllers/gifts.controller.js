// Load the module dependencies
var mongoose = require('mongoose'),
    Gifts = mongoose.model('Gift'),
    url = require('url'),
    util = require('./util.controller');

exports.getGifts = function (req, res) {
    Gifts.aggregate([
            {
                $group:
                {
                    _id: "$popup",
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


exports.getGift = function (req, res) {
    var id = url.parse(req.url, true).query.id;
    Gifts.find().where('id').equals(id)
        .exec(function (err, data) {
            if (err) {
                // If there was an error send the error message
                return res.status(400).send({
                    message: util.getErrorMessage(err)
                });
            }
            else {
                res.status(200).json(data);
            }
        });
};

