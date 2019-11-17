const EmailList = require('../models/emailList.server.model.js')
var mongoose = require('mongoose')
mail = require("../controllers/mail.js"),




exports.create = function (req, res) {

    /* Instantiate a Listing */
    var emailList = new EmailList({ name: req.body.name, email: req.body.email });
    /* Then save the listing */
    emailList.save(function (err) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send('{"message":"Email successfully added to list serve."}');
        }
    });
};





