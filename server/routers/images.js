const express = require('express')
const bodyParser = require('body-parser')
const debug = require('./debug.js')
const path = require('path')
const fs = require('fs')
const archiver = require('archiver')
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
    debug.logRequest('/images/download-all','GET')
    const zipfile = directory + '../images.zip'
    zipImages(directory, zipfile, () => {
        res.download(zipfile)
    })
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

function zipImages(source, target, callback) {
    var stream = fs.createWriteStream(target)
    var archive = archiver('zip');

    stream.on('close', () => {
        console.log('Zip file created (' + archive.pointer() + ' bytes)')
        callback()
    })

    archive.on('error', (err) => {
        throw err
    })

    archive.pipe(stream)
    archive.glob(source + '/*.jpg')
    archive.finalize()
}



module.exports = router; //export for server.js