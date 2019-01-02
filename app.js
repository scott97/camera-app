const express = require('express')
const nunjucks = require('nunjucks')
const app = express()
const port = 80

nunjucks.configure('views', {
    autoescape: true,
    express   : app
  });

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req, res) {
    res.render('index.njk', {
      title : 'Raspberry Pi',
    });
  });

app.listen(port, () => console.log(`Http request to port ${port}.`))
