module.exports = {
    logRequest: function(url, method, data='') {
        if (data == '') {
            console.log(`${url} (${method})`)
        }
        else {
            console.log(`${url} (${method}): ${JSON.stringify(data)}`)
        }
    }
}