function ApplySettings() {
    var data = {
        cameraName: document.querySelector('[name="cameraName"]').value,
        capture:    document.querySelector('[name="capture"]').checked,
    }

    postToAPI('api/settings', data)
}

function LoadSettings() {
    getFromAPI('api/settings', function(data) {
        document.querySelector('[name="cameraName"]').value = data.cameraName;
        document.querySelector('[name="capture"]').checked = data.capture;
    })
}

function ResetSettings() {
    
}


window.onload = LoadSettings()