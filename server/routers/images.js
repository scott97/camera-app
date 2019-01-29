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
        if (err) throw err
        res.json(files)
        debug.logRequest('/images/list-all','GET',files)
    })
})
router.get('/download-all', (req,res) => {
    var data = zipImages()
    var zipfile = path.join(directory,'images.zip')
    fs.writeFileSync(zipfile, data, 'binary');
    res.download(zipfile)
    debug.logRequest('/images/download-all','GET')
})
router.get('/delete-all', (req,res) => {
    fs.readdir(directory, (err,files) => {
        if (err) throw err
        files.forEach(file => {
            fs.unlink(path.join(directory,file), () => {if (err) throw err} )
        })
    })
    debug.logRequest('/images/delete-all','GET')
    res.redirect('/download-pictures')
})
router.use('/', express.static(directory))


function zipImages() {
    var zip = new require('node-zip')()

    fs.readdir(directory, (err,files) => {
        if (err) throw err
        files.forEach(file => {
            zip.file(file, fs.readFileSync(path.join(directory,file)))
        })

    })

    var data = zip.generate({ base64:false, compression: 'DEFLATE' })

    return data
}



module.exports = router; //export for server.js