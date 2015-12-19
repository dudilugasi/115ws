// Load the module dependencies
var mongoose = require('mongoose'),
        Carts = mongoose.model('Cart'),
        url = require('url'),
        util = require('./util.controller');

exports.getSexData = function (req, res) {
    //mock data for now
    var data = {
        "name": "מין",
        "series" : [
            
            {
                "name" : "הצליחו",
                "values" : [
                    {
                        "name" : "נשים",
                        "value" : 10,
                        "color" : "#EC008C"
                    },
                    {
                        "name" : "גברים",
                        "value" : 4,
                        "color" : "#00AEEF"
                    }
                ]
            },
            {
                "name" : "לא הצליחו",
                "values" : [
                    {
                        "name" : "נשים",
                        "value" : -8,
                        "color" : "#F8C1D9"
                    },
                    {
                        "name" : "גברים",
                        "value" : -5,
                        "color" : "#ABE1FA"
                    }
                ]
            }
        ]
    };
    res.status(200).json(data);
};

