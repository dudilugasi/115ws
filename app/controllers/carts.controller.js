// Load the module dependencies
var mongoose = require('mongoose'),
        Carts = mongoose.model('Cart'),
        url = require('url'),
        util = require('./util.controller');

exports.getSexData = function (req, res) {

    res.status(200).json();
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