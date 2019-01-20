const express = require('express')
const bodyParser = require('body-parser')
const debug = require('./debug.js')
const path = require('path')
const fs = require('fs')
const directory = path.join(__dirname, '../../images')

var router = express.Router()

// JSON Parsing
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/list-all', function(req,res) {
    fs.readdir(directory, (err,files) => {
        files.forEach((file) => {
            file = '/images/' + file
        })
        res.json(files)
        debug.logRequest('/images/list','GET',files)
    })
})
router.use('/', express.static(directory))


module.exports = router; //export for server.js