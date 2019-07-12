const root = '/home/pi/Camera-App'
const express = require('express')
const apiRouter = require(root + '/server/routers/api.js')
const imagesRouter = require(root + '/server/routers/images.js')
const pagesRouter = require(root + '/server/routers/pages.js')

// Exports
export let server = express()


// Routers
// Static Resources
server.use(express.static(root + '/server/public'))

// API 
server.use('/api', apiRouter)

// Images
server.use('/images',imagesRouter)