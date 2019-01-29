// Requires
const PiCamera = require('pi-camera')
const now = require('moment')
const server = require('./server/server.js')
var settings = require('./settings.js')

const Raspi = require('raspi-io');
const gpio = require('johnny-five');
const board = new gpio.Board({io: new Raspi()})

// Server Stuff
const port = 80
server.listen(port, () => console.log(`Server started on port ${port}.`))  // Start server

// Keep Settings Up to Date
settings.onupdate = () => {
    var se = settings.load()
}


// Electronics
board.on('ready', () => {
    var lights = new gpio.Pin(17)
    var pir = new gpio.Pin(4, gpio.Pin.INPUT)
    var pir = new gpio.Pin({
        pin: 4,
        type: 'digital',
        mode: gpio.Pin.INPUT,
    })


    pir.on('high', function() {
        console.log( 'Motion detected' );
        snap()
    })
})




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

