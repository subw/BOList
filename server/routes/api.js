const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/bolist', (err, client) => {
        if (err) return console.log(err);
        
        let db = client.db('bolist');
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get activities
router.get('/activities', (req, res) => {
    connection((db) => {
        db.collection('activities')
            .find()
            .toArray()
            .then((activities) => {
                response.data = activities;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Set activities
router.post('/activities', (req, res) => {
    connection((db) => {
        db.collection('activities')
            .save(req.body)
            .then((result) => {
                response.data = result.ops[0];
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Delete activities
router.delete('/activities/:id', (req, res) => {
    var id = req.param("id");
    connection((db) => {
        db.collection('activities')
            .deleteOne(id)
            .then((result) => {
                console.log(result);
                console.log(result.ops[0]);
                response.data = result.ops[0];
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;