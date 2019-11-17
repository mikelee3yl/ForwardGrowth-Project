var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var listingSchema = new Schema({
/* your code here from Bootcamp Assignment #2 - ListingSchema.js File*/
    name: String,
    email: String,
    created_at: Date,
    updated_at: Date
});

listingSchema.pre('save', function (next) {
    /* your code here from Bootcamp Assignment #2 - ListingSchema.js File */
    if (this.name == null)
        throw err;
    if (this.email == null)
        throw err;
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

var emailList = mongoose.model('Listing', listingSchema);
module.exports = emailList;
