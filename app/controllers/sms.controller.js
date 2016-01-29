var mongoose = require('mongoose'),
    sms = mongoose.model('sms'),
    url = require('url');

exports.getSms = function(req,res) {
    var status = url.parse(req.url,true).query.status;
    var sex = url.parse(req.url,true).query.sex;
    var children = url.parse(req.url,true).query.children;
    sms.find().where('status').equals(status)
        .where('sex').equals(sex)
        .where('children').equals(children)
        .exec(function(err,data){
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

