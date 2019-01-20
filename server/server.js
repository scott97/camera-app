const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const apiRouter = require('./routers/api.js')
const pagesRouter = require('./routers/pages.js')
const fs = require('fs');

const server = express()

// Nunjucks
nunjucks.configure('server/views', {
    autoescape: true,
    express: server
})


// Routers
// Static Resources
server.use(express.static(path.join(__dirname, './public')))

// API 
server.use('/api', apiRouter)

// Web pages
server.use('/', pagesRouter)

// Images - note - make this into a seperate router
const imagesFolder = path.join(__dirname, '../images');
server.get('/image-list', function(req,res) { // Not working
    fs.readdir(imagesFolder, (err, files) => {
        var txt = ''
        files.forEach(file => {
            console.log(file)
            txt += file + '<br>\n'
        })
        res.send(txt)
    })
    res.send('oops')
})
server.use('/images', express.static(imagesFolder))


// Export
module.exports = server

