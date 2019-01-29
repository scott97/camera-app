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


module.exports = {
    load: load,

    update: update,

}