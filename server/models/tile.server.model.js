var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var tileSchema = new Schema({
    _id: String,
    img:
        {data:Buffer, contentType:String},
    name: String,
    position: String,
    created_at: Date,
    updated_at: Date
});

tileSchema.pre('save', function (next) {
    if (this._id == null)
        throw err;
    if (this.name == null)
        throw err;
    if (this.img == null)
        throw err;
    if (this.position == null)
        throw err;
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

var tile = mongoose.model('tiles', tileSchema);
module.exports = tile;
