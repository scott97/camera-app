const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const settings = require('../api/settings.js')
const debug = require('./debug.js')

var upload = multer()
var router = express.Router()

// JSON Parsing
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

// Response Parsing
router.use(upload.array()); 

// Camera Settings
router.route('/settings')
    .get(function (req, res) {
        data = settings.load()
        res.json(data);
        debug.logRequest('/api/settings','GET',data)
    })

    .post(function (req, res) {
        settings.update(req.body)
        debug.logRequest('/api/settings','POST',req.body)
    })


module.exports = router; //export for server.js