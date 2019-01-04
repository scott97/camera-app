const fs = require('fs')

function load() {
    return JSON.parse(fs.readFileSync('settings.json'));
}


function save(data) {
    fs.writeFile('settings.json', JSON.stringify(data), function (err) {
        if (err) throw err;
    })
}

function update(data, newData) {
    for (var attr in newData)
    { 
        data[attr] = newData[attr]; 
    }

    save(data)
}


module.exports = {
    load: load,

    save: save,

    update: update,

    defaults: {
        cameraName: 'Wildlife Camera',
        cameraOrientation: 'Normal',
        capture: true
    },
}