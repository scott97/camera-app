const express = require('express')
const bodyParser = require('body-parser')
const debug = require('./debug.js')
const directory = path.join(__dirname, '../../images')

var router = express.Router()

// JSON Parsing
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/list', function(req,res) {
    fs.readdir(directory, (err,list) => {
        res.json(list)
        debug.logRequest('/images/list','GET',list)
    })

})
router.use('/', express.static(directory))


module.exports = router; //export for server.js