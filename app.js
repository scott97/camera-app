"use strict";

const server = require('./server/server.js')
const port = 80

// Start Server for controlling pi
server.listen(port, () => console.log(`Server started on port ${port}.`))

// Do camera stuff
const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
  mode: 'photo',
  output: `${ __dirname }/test.jpg`,
  width: 640,
  height: 480,
  nopreview: false,
});
 
myCamera.snap()
  .then((result) => {
    // Your picture was captured
  })
  .catch((error) => {
     // Handle your error
  });