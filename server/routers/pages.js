var express = require('express');
var router = express.Router();

function exists(page) {
    var pages = ['overview', 'camera-settings', 'sensor-settings', 'download-pictures', 'advanced-settings']
    return pages.includes(page)
}

router.get('/', function (req, res) {
    res.render('overview.njk', {
        page: 'overview',
    });

})

router.get('/:page', function (req, res) {
    if (exists(req.params.page)) {
        res.render(req.params.page + '.njk', {
            page: req.params.page,
        });
    } else {
        res.status(404).send("Sorry can't find that!")
    }
})


module.exports = router; //export for app.js