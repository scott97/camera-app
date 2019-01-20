function ApplySettings() {
    var data = {
        cameraOrientation: getFormValue('cameraOrientation'),
        sharpness: getFormValue('sharpness'),
        contrast: getFormValue('contrast'),
        brightness: getFormValue('brightness'),
        saturation: getFormValue('saturation'),
        iso: getFormValue('iso'),
        evCompensation: getFormValue('evCompensation'),
    }

    postToAPI('api/settings', data)
}

function LoadSettings() {
    getFromAPI('api/settings', function(data) {
        setFormValue('cameraOrientation', data.cameraOrientation)
        setFormValue('sharpness', data.sharpness)
        setFormValue('contrast', data.contrast)
        setFormValue('brightness', data.brightness)
        setFormValue('saturation', data.saturation)
        setFormValue('iso', data.iso)
        setFormValue('evCompensation', data.evCompensation)
    })
}

function ResetSettings() {
    
}


window.onload = LoadSettings()
