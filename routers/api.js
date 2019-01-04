const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const settings = require('../api/settings.js')

var upload = multer()
var router = express.Router()

// JSON Parsing
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

// Settings
data = settings.load()

// Response Parsing
router.use(upload.array()); 

// Camera Settings
router.route('/settings')
    .get(function (req, res) {
        res.json(data);
    })

    .post(function (req, res) {
        console.log(req.body)
        settings.update(data, req.body)
    })


module.exports = router; //export for app.js