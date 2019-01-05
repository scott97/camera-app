"use strict";

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
        callback(data);
    })
}