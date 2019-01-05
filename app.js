"use strict";

const server = require('./server/server.js')
const port = 80

// Start Server for controlling pi
server.listen(port, () => console.log(`Server started on port ${port}.`))


const RaspiCam = require("raspicam");
var camera = new RaspiCam({
    mode: 'photo',
    output: '~./test.jpg',
});

// Take a snapshot
camera.start()
camera.stop()