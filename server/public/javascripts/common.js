"use strict";

// API communication

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

// Form data
function getFormValue(name) {
    var element = document.querySelector(`[name="${name}"]`)
    var attr = element.getAttribute('type')

    // Boolean
    if (attr == 'checkbox') {
        return element.checked
    }

    // Number
    if (attr == 'range') {
        return Number(element.value)
    }

    // Text
    return element.value
    
}

function setFormValue(name, value) {
    var element = document.querySelector(`[name="${name}"]`)

    // Boolean
    if (typeof value === 'boolean' ) {
        element.checked = value
    }
    // Number / Text
    if (typeof value === 'number' || typeof value === 'string') {
        element.value = value
    }

    forceSliderRefresh(element, value)

}

// Capture Switch
document.addEventListener('DOMContentLoaded', function () {
    
    // Set initial value
    getFromAPI('api/settings', function(data) {
        setFormValue('capture', data.capture)
    } )

    // Update on input event
    document.querySelector('[name="capture"]').addEventListener('input', function (event) {
        var data = {
            capture: getFormValue('capture'),
        }
        postToAPI('api/settings', data)
    })
})



// Slider
// Add event listener to update output when slider value change
document.addEventListener('DOMContentLoaded', function () {
    var sliders = document.querySelectorAll('input[type="range"].slider');
    sliders.forEach( (slider) => {
        var output = slider.parentElement.querySelector('output')
        if (output) {
            slider.addEventListener('input', function (event) {
                output.value = slider.value
            })
        }
    })
});

function forceSliderRefresh(slider, value) {
    var output = slider.parentElement.querySelector('output')
    if (output) {
        output.value = value
    }
}