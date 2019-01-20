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

// Images - note - make this into a seperate router
const imagesFolder = path.join(__dirname, '../images');
server.get('/image-list', function(req,res) { // Not working
    getImages(imagesFolder, (err,files) => {
        console.log(files)
        res.send('Files:<br>'+ JSON.stringify(files))
    })
})
server.use('/images', express.static(imagesFolder))


function getImages(directory, callback) {
    var extname = '.jpg',
        files = [], i;
    fs.readdir(directory, function (err, list) {
        for(i=0; i<list.length; i++) {
            if(path.extname(list[i]) === extname) {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}


// Web pages
server.use('/', pagesRouter)



// Export
module.exports = server

