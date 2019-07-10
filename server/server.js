const root = '/home/pi/Camera-App'
const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const apiRouter = require(root + '/server/routers/api.js')
const pagesRouter = require(root + '/server/routers/pages.js')
const imagesRouter = require(root + '/server/routers/images.js')

// Exports
export let server = express()

// Nunjucks
nunjucks.configure('server/views', {
    autoescape: true,
    express: server
})


// Routers
// Static Resources
server.use(express.static(root + '/server/public'))

// API 
server.use('/api', apiRouter)

// Images
server.use('/images',imagesRouter)


// Web pages
server.use('/', pagesRouter)