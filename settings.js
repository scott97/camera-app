const fs = require('fs')

function load() {
    return JSON.parse(fs.readFileSync('settings.json'));
}

function update(received) {
    var data = load();
    
    for (var attr in received)
    { 
        data[attr] = received[attr]; 
    }

    fs.writeFile('settings.json', JSON.stringify(data), (err) => { if (err) throw err; })
}


function reset() {
    var data = {
        cameraName: 'Wildlife Camera',
        capture: false,
        cameraOrientation: 'Normal',
        sharpness: 0,
        contrast: 0,
        brightness: 50,
        saturation: 0,
        iso: 400,
        evCompensation: 0,
    }

    fs.writeFile('settings.json', JSON.stringify(data), (err) => { if (err) throw err; })
}


export let settings = {
    load: load,

    update: update,

    reset: reset,

}

