const insta_update = require('../models/blog.server.model.js')
var mongoose = require('mongoose')
//mail = require("../controllers/mail.js"),




    exports.update = function (req, res) {

        /* Instantiate a Listing */
        var insta = new insta_update({ code: 0, instagramlink: req.body.instagramlink });
        /* Then save the listing */
        insta.save(function (err) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send('{"message":"Instagram link successfully updated."}');
            }
        });
  
    };





