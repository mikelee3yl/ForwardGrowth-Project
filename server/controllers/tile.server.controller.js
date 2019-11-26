const tile = require('../models/tile.server.model.js')
var mongoose = require('mongoose')
//mail = require("../controllers/mail.js"),
var fs = require('fs');




    exports.add = function (req, res) {

        /* Instantiate a Listing */
        var insta = new tile({ name: req.body.name, position: req.body.position });
        //console.log(req.body.photo);
        insta.img.data = Buffer.from(fs.readFileSync(req.file.path),'base64');

        insta.img.contentType = 'image/png';
        /* Then save the listing */
        insta.save(function (err) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send('{"message":"Successfully added a team member."}');
            }
        });
        
  
};
exports.delete = function (req, res) {
    tile.deleteOne({ name: req.body.name }, function (err, tileDeleted) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send('{"message":"Successfully deleted '.concat(req.body.name, '\'s card"}'));
        }
    });

};

exports.get = function (req, res) {
    tile.find({}, function (err, listyBoi) {
        if (err) {
            console.log(err);

            res.status(400).send(err);
        } else {
            console.log(listyBoi);
            res.send(listyBoi);

        }
    });
};

// exports.update = function (req, res) {

//     /* Instantiate a Listing */
//     //var insta = new home({ code: 0,  company: req.body.company, payment: req.body.payment, about: req.body.about });
//     ///* Then save the listing */
//     //insta.save(function (err) {
//     //    if (err) {
//     //        res.status(400).send(err);
//     //    } else {
//     //        res.send('{"message":"Instagram link successfully created."}');
//     //    }
//     //});
//     tile.findOneAndUpdate({ 'code': 0 }, { 'name': req.body.name, 'position': req.body.position}, function (err, list) {
//         if (err) {
//             res.status(400).send(err);
//         } else {
//             res.send('{"message":"Home page successfully updated."}');
//         }
//     });

// };





