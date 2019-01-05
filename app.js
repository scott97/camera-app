// Server Stuff
const server = require('./server/server.js')
const port = 80

// Start server for controlling pi
server.listen(port, () => console.log(`Server started on port ${port}.`))



// Camera Stuff
const PiCamera = require('pi-camera');
const camera = new PiCamera({
    mode: 'photo',
    output: `${ __dirname }/test.jpg`,
    width: 640,
    height: 480,
    nopreview: false,
    fullscreen: true,
});
 
camera.snap()
    .then((result) => {
        console.log('picture taken')
    })
    .catch((error) => {
        console.log('camera error')
    });