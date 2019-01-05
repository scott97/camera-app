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

// Response Parsing
router.use(upload.array()); 

// Camera Settings
router.route('/settings')
    .get(function (req, res) {
        data = settings.load()
        console.log(`/api/settings (GET): ${JSON.stringify(data)}`)
        res.json(data);
    })

    .post(function (req, res) {
        console.log(`/api/settings (POST): ${JSON.stringify(req.body)}`)
        settings.update(req.body)
    })


module.exports = router; //export for app.js