const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const multer = require('multer')

var upload = multer()
var router = express.Router()

// JSON Parsing
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

// Response Parsing
router.use(upload.array()); 

// Settings
var settings = JSON.parse(fs.readFileSync('settings.json'))


function saveData() {
    fs.writeFile('settings.json', JSON.stringify(settings), function (err) {
        if (err) throw err;
        console.log('File Saved');
    });
}


// Camera Settings
router.route('/settings')
    .get(function (req, res) {
        res.json(settings);
    })

    .post(function (req, res) {
        console.log(req.body)

        // Update settings with request data
        for (var attr in req.body)
        { 
            settings[attr] = req.body[attr]; 
        }

        saveData()
    })


module.exports = router; //export for app.js