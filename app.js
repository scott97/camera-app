const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path');
const app = express()
const port = 80


app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
    res.render('overview.njk', {
        title: 'Raspberry Pi',
    });
});

// General router
app.get('/:page', function (req, res) {
    res.render(req.params.page + '.njk', {
        page: req.params.page,
        title: 'Raspberry Pi',
    });
});



app.listen(port, () => console.log(`Http request to port ${port}.`))