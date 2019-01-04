"use strict";

function overviewOnClick() {
    var data = {
        cameraName: document.querySelector('[name="cameraName"]').value,
        capture: document.querySelector('#Capture').checked,
    }

    postToAPI('api/settings', data)
    console.log(data);
}



function postToAPI(url, data) {
    var xmlhttp = new XMLHttpRequest();
    var json = JSON.stringify(data);

    xmlhttp.open('POST', url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(json);
}
