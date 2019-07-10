// Requires
const root = '/home/pi/Camera-App'
const PiCamera = require('pi-camera')
const now = require('moment')
import {server} from (root + '/server/server.js')
import {settings} from (root + '/settings.js')

const Raspi = require('raspi-io');
const gpio = require('johnny-five');
const board = new gpio.Board({io: new Raspi()})

// Server Stuff
const port = 80
server.listen(port, () => console.log(`Server started on port ${port}.`))  // Start server

// Electronics
board.on('ready', () => {

    // GPIO 17 or wiring pi 0
    var flash = new gpio.Relay({
        pin: 0,
        type: 'NC', // Normally open
    })

    flash.open()

    // GPIO 4 or wiring pi 7
    var pir = new gpio.Pin({ 
        pin: 7,
        type: 'digital',
        mode: gpio.Pin.INPUT,
    })    

    pir.on('high', function() {
        var se = settings.load()

        if (se.capture) {
            console.log( 'Motion detected' )
            snap(se, flash)
        }
    })
})


// Camera stuff
function snap(se, flash) {
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
    flash.close()
    camera.snap()
        .then((result) => {
            console.log('Picture taken')
            flash.open()
        })
        .catch((error) => {
            console.log('Pamera error')
            flash.open()
        })
}

