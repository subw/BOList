var express = require('express');
var router = express.Router();

var activity_controller = require('../controllers/activityController');

/// AUTHOR ROUTES ///

// POST request for creating Activity.
router.post('/activity/create', activity_controller.activity_create_post);

// POST request to delete Activity.
router.post('/activity/:id/delete', activity_controller.activity_delete_post);

// POST request to update Activity.
router.post('/activity/:id/update', activity_controller.activity_update_post);

// GET request for one Activity.
router.get('/activity/:id', activity_controller.activity_detail);

// GET request for list of all Activities.
router.get('/activities', activity_controller.activity_list);

module.exports = router;