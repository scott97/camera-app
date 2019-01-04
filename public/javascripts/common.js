"use strict";

function overviewOnClick() {
    var data = {
        cameraName: document.querySelector('[name="cameraName"]').value,
        capture: document.querySelector('[name="capture"]').checked,
    }

    postToAPI('api/settings', data)
    console.log(data);
}

function overviewOnLoad() {
    getFromAPI('api/settings', function(data) {
        document.querySelector('[name="cameraName"]').value = data.cameraName;
        document.querySelector('[name="capture"]').checked = data.capture;
    })
}


function postToAPI(url, data) {
    var http = new XMLHttpRequest();
    var json = JSON.stringify(data);

    http.open('POST', url);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(json);
}

function getFromAPI(url, callback) {
    var http = new XMLHttpRequest()

    http.open('GET', url, true)
    http.send()

    http.addEventListener("load",  function () {
        var data = JSON.parse(this.responseText);
        callback(data.defaults);
    })
}
