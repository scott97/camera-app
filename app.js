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
      title : 'My First Nunjucks Page',
      items : [
        { name : 'item #1' },
        { name : 'item #2' },
        { name : 'item #3' },
        { name : 'item #4' },
      ]
    });
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
