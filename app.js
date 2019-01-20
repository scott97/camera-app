// Requires
const PiCamera = require('pi-camera')
const fs = require('fs')
const settings = require('./settings.js')
const server = require('./server/server.js')

// Server Stuff
const port = 80
server.listen(port, () => console.log(`Server started on port ${port}.`))  // Start server



// Camera Setup
var camera = newPiCamera()  // Initialise Camera
fs.watchFile('settings.json', (curr,prev) => {camera = newPiCamera()} ) // Keep Camera Updated with latest settings

function newPiCamera() {
    console.log('PiCamera settings updated')

    var se = settings.load()

    return new PiCamera({
        mode: 'photo',
        output: `${ __dirname }/test.jpg`,
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

}


// Camera Logic
camera.snap()
    .then((result) => {
        console.log('picture taken')
    })
    .catch((error) => {
        console.log('camera error')
    });