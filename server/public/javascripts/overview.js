function ApplySettings() {
    var data = {
        cameraName: getFormValue('cameraName'),
    }

    postToAPI('api/settings', data)
}

function LoadSettings() {
    getFromAPI('api/settings', function(data) {
        setFormValue('cameraName', data.cameraName)
    })
}

function ResetSettings() {
    
}


window.onload = LoadSettings()