const login_model = require('../models/login.server.model.js')
var mongoose = require('mongoose')
//mail = require("../controllers/mail.js"),




    exports.save = function (req, res) {

        /* Instantiate a Listing */
        var insta = new insta_update({ code: 0, username: req.body.username, password:req.body.password });
        /* Then save the listing */
        insta.save(function (err) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send('{"message":"Instagram link successfully created."}');
            }
        });
        //insta_update.findOneAndUpdate({ 'code': 0 }, { 'instagramlink': req.body.instagramlink }, function (err, blog) {
        //    if (err) {
        //        res.status(400).send(err);
        //    } else {
        //        res.send('{"message":"Instagram link successfully updated."}');
        //    }
        //});
  
};
exports.token = function (req, res) {
    login_model.findOne({ 'code': 0 }, function (err, account) {
        if (err) {
            console.log(err);

            res.status(400).send(err);
        } else {
            if (req.body.username ===account.username && req.body,)

        }
    });
}





