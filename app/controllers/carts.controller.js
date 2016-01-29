// Load the module dependencies
var mongoose = require('mongoose'),
        Carts = mongoose.model('Cart'),
        url = require('url'),
        util = require('./util.controller');

exports.getCarts = function (req, res) {
    Carts.find({},function(err,docs){

        res.status(200).json(docs);
    });
};


exports.getPopularProducts = function (req, res) {
    Carts.aggregate([
    {$unwind:"$products"},
    {$group: {_id : "$products", count: { $sum : 1}}}
    ]).sort({count : -1}).exec(function(err,docs){
        res.status(200).json(docs);
    });
};


exports.getRejectedProducts = function (req, res) {
    Carts.aggregate([
        {$unwind:"$rejectedProducts"},
        {$group: {_id : "$rejectedProducts", count: { $sum : 1}}}
    ]).sort({count : -1}).exec(function(err,docs){
        res.status(200).json(docs);
    });
};


exports.getFavoriteRelative = function (req, res) {
    Carts.aggregate([
        {$unwind:"$answeredSMS"},
        {$group: {_id : "$answeredSMS", count: { $sum : 1}}}
    ]).sort({count : -1}).exec(function(err,docs){
        res.status(200).json(docs);
    });
};

exports.getFavoriteOffer = function (req, res) {
    Carts.aggregate([
        {$unwind:"$answeredOffer"},
        {$group: {_id : "$answeredOffer", count: { $sum : 1}}}
    ]).sort({count : -1}).exec(function(err,docs){
        res.status(200).json(docs);
    });
};

exports.countPassed = function (req, res) {
    Carts.where({'passed':true}).count(function(err,docs){
        res.status(200).json(docs);
    })
};
exports.countFailed = function (req, res) {
    Carts.where({'passed':false}).count(function(err,docs){
        res.status(200).json(docs);
    })
};
exports.countMale = function (req, res) {
    Carts.where({'sex':"zahar"}).count(function(err,docs){
        res.status(200).json(docs);
    })
};
exports.countFemale = function (req, res) {
    Carts.where({'passed':"female"}).count(function(err,docs){
        res.status(200).json(docs);
    })
};

exports.saveCart = function (req,res) {
    var cart = new Carts(req.body);
    cart.save(function(err){
        if (err) {
            res.status(404).json();
        }
        else {
            res.status(200).json();
        }
    })
};