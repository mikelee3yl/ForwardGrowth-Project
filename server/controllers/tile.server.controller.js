const tile = require('../models/tile.server.model.js')
var mongoose = require('mongoose')
//mail = require("../controllers/mail.js"),
var fs = require('fs');




    exports.add = function (req, res) {

        /* Instantiate a Listing */
        var insta = new tile({ name: req.body.name, position: req.body.position });
        //console.log(req.body.photo);
        insta.img.data = Buffer.from(fs.readFileSync(req.file.path),'base64');
        console.log(insta.img.data)

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


exports.update = function (req, res) {
    //updateTile(person.name,this.refs.NewName, this.refs.NewPosition, this.refs.NewPhoto).then(({ message }) => {
    //body: JSON.stringify({ originalname, name, position, photo })
    var original = String(req.body.originalname);
    tile.findOne({name: original}, function (err, _tile) {
        if (err) {
          res.json("err");
        }
        if(_tile.name != req.body.name) _tile.name = req.body.name;
        if (_tile.position != req.body.position) _tile.position = req.body.position;
        if (req.body.photo != null) _tile.photo = req.body.photo;
        
        _tile.photo.data = Buffer.from(fs.readFileSync(req.file.path), { encoding: 'base64' });
        _tile.photo.contentType = 'image/png';

        _tile.save(function (err) {
          if (err)
            res.json(err);
          res.json(_tile);
        });
        res.send('{"message":"Team member has been updated"');
      });
};






