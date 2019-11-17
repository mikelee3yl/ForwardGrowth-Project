var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var blogSchema = new Schema({
    instagramlink: String,
    created_at: Date,
    updated_at: Date
});

homeSchema.pre('save', function (next) {
    if (this.instagramlink == null)
        throw err;
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

var home = mongoose.model('Listing', homeSchema);
module.exports = home;
