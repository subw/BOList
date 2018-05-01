var Activity = require('../models/activity');

// Display list of all Activities.
exports.activity_list = function(req, res, next) {
    Activity.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_activities) {
        if (err) { return next(err); }
        //Successful, so send
        res.send(list_activities);
    });
};

// Return a specific Activity.
exports.activity_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Activity detail: ' + req.params.id);
};

// Handle Activity create on POST.
exports.activity_create_post = function(req, res, next) {
    var activity = new Activity({name: req.body.name});
    activity.save(function (err) {
        if (err) { return next(err); }
        res.send(activity);
    });
};

// Handle Activity delete on POST.
exports.activity_delete_post = function(req, res) {
    Activity.findByIdAndRemove(req.params.id, function deleteAuthor(err) {
        if (err) { return next(err); }
    });
};


// Handle Activity update on POST.
exports.activity_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Activity update POST');
};
