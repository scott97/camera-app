const root = '/home/pi/Camera-App'
const express = require('express')
const apiRouter = require(root + '/server/routers/api.js')
const imagesRouter = require(root + '/server/routers/images.js')

// Exports
module.exports = express()


// Routers
// Static Resources
server.use(express.static(root + '/server/public'))

// API 
server.use('/api', apiRouter)

// Images
server.use('/images',imagesRouter)