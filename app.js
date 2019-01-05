const server = require('./server/server.js')
const port = 80

// Start Server for controlling pi
server.listen(port, () => console.log(`Server started on port ${port}.`))

// Do rpi stuff
