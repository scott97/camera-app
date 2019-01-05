function ApplySettings() {
    var data = {
        cameraOrientation: document.querySelector('[name="cameraOrientation"]').value,
    }

    postToAPI('api/settings', data)
}

function LoadSettings() {
    getFromAPI('api/settings', function(data) {
        document.querySelector('[name="cameraOrientation"]').value = data.cameraOrientation
    })
}

function ResetSettings() {
    
}


window.onload = LoadSettings()