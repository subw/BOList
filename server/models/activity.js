var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ActivitySchema = new Schema(
    {
        name: {type: String, required: true, max: 100}
    }
);

// Virtual for activitie's URL
ActivitySchema
.virtual('url')
.get(function () {
    return '/activity/' + this._id;
});

module.exports = mongoose.model('Activity', ActivitySchema);