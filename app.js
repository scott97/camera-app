const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const apiRouter = require('./routers/api.js')
const pagesRouter = require('./routers/pages.js')

const app = express()
const port = 80

// Misc
app.listen(port, () => console.log(`Http request to port ${port}.`))

// Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app
})


// Routers
// Static Resources
app.use(express.static(path.join(__dirname, 'public')))

// API 
app.use('/api', apiRouter)

// Web pages
app.use('/', pagesRouter)

// // 404
// app.use("*",function(req,res){
//     res
//         .status(404)
//         .render('.njk')
// })