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

// Electronics
board.on('ready', () => {
    var lights = new gpio.Pin(0) // GPIO 17 or wiring pi 0
    var pir = new gpio.Pin({ // GPIO 4 or wiring pi 7
        pin: 7,
        type: 'digital',
        mode: gpio.Pin.INPUT,
    })

    pir.on('high', function() {
        console.log( 'Motion detected' )
        var se = settings.load()

        if (se.capture) {
            snap(se)
        }
        else {
            console.log('Camera disabled')
        }
    })
})


// Camera stuff
function snap(se) {
    // Get filename
    var date = now().format('YYYY-MM-DD_HH:mm:ss')

    // Configure Camera
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
            console.log('Picture taken')
        })
        .catch((error) => {
            console.log('Pamera error')
        })
}

