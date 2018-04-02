var Activity = require('../models/activity');

// Display list of all Activities.
exports.activity_list = function(req, res, next) {
    Activity.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_activities) {
        if (err) { return next(err); }
        //Successful, so send
        console.log(list_activities);
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
        // Successful - redirect to new author record.
        res.send(activity);
    });
};

// Handle Activity delete on POST.
exports.activity_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Activity delete POST');
};


// Handle Activity update on POST.
exports.activity_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Activity update POST');
};
