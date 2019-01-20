const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const apiRouter = require('./routers/api.js')
const pagesRouter = require('./routers/pages.js')
const imagesRouter = require('./routers/images.js')

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

// Images
server.use('/images',imagesRouter)


// Web pages
server.use('/', pagesRouter)



// Export
module.exports = server

