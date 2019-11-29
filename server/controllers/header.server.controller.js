const Header = require('../models/header.server.model.js')
var mongoose = require('mongoose')
var fs = require('fs');




exports.add = function (req, res) {

    var header = new Header();
    // header.img.data = Buffer.from(fs.readFileSync(req.file.path), { encoding: 'base64' });
    header.img.contentType = 'image/png';
    header.img.data = null; 
    
    header.save(function (err) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send('{"message":"Successfully added a header image."}');
        }
    });


};


exports.get = function (req, res) {
    Header.find({}, function (err, header) {
        if (err) {
            console.log(err);

            res.status(400).send(err);
        } else {
            console.log(header);
            res.send(header);

        }
    });
}





