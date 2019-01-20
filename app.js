// Requires
const PiCamera = require('pi-camera')
const now = require('moment')
const settings = require('./settings.js')
const server = require('./server/server.js')
var cron = require('node-cron')

// Server Stuff
const port = 80
server.listen(port, () => console.log(`Server started on port ${port}.`))  // Start server



// Camera stuff
function snap() {
    // Get filename
    var date = now().format('YYYY-MM-DD_HH:mm:ss')

    // Configure Camera
    var se = settings.load()

    const camera = new PiCamera({
        mode: 'photo',
        output: `${ __dirname }/images/${date}.jpg`,
        width: 640,
        height: 480,
        nopreview: false,
        fullscreen: true,
        vflip: se.cameraOrientation == true,
        sharpness: se.sharpness,
        contrast: se.contrast,
        brightness: se.brightness,
        saturation: se.saturation,
        ISO: se.iso,
        ev: se.evCompensation,
    })

    // Take Picture
    camera.snap()
        .then((result) => {
            console.log('picture taken')
        })
        .catch((error) => {
            console.log('camera error')
        })
}



// Test code
cron.schedule('* * * * *', () => {
    snap()
})