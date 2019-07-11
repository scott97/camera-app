<script>
    import {
        Switch,
        Tabs,
        Tab
    } from "svelma";
    import Overview from './Fragments/Overview.svelte'
import CameraSettings from './Fragments/CameraSettings.svelte'
import SensorSettings from './Fragments/SensorSettings.svelte'
import AdvancedSettings from './Fragments/AdvancedSettings.svelte'
import TitleBar from './Fragments/TitleBar.svelte'
import DownloadPictures from './Fragments/DownloadPictures.svelte'

    // Data
    let Settings = {
        capture: false,
        cameraName: "Wildlife Camera",

        // Sliders
        sharpness: 10,
        sharpness: 0,
        contrast: 0,
        brightness: 50,
        saturation: 0,
        iso: 450,
        evCompensation: 0,

        // Dropdown options
        orientation: "Normal",
        exposureMode: "Auto",
        awb: "Off",
        metering: "Average",
    };

    // Load Settings
    // TODO

    // Update
    $: {
        console.log(Settings);
        fetch('api/settings', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Settings)
        });
    }
</script>

<style>
    .section {
        padding: 1.5rem 1.5rem;
    }
</style>

<div class="section">
    <div class="container">
        <TitleBar title={Settings.cameraName} bind:capture={Settings.capture}/>
        <Tabs>
            <Tab label="Overview" active>
                <Overview bind:cameraName={Settings.cameraName} />
            </Tab>

            <Tab label="Download Pictures">
                <DownloadPictures/>
            </Tab>

            <Tab label="Camera Settings">
                <CameraSettings bind:sharpness={Settings.sharpness} bind:contrast={Settings.contrast}
                    bind:brightness={Settings.brightness} bind:saturation={Settings.saturation} bind:iso={Settings.iso}
                    bind:evCompensation={Settings.evCompensation} bind:orientation={Settings.orientation}
                    bind:exposureMode={Settings.exposureMode} bind:awb={Settings.awb}
                    bind:metering={Settings.metering} />
            </Tab>

            <Tab label="Sensor Settings">
                <SensorSettings />
            </Tab>

            <Tab label="Advanced Settings">
                <AdvancedSettings />
            </Tab>

        </Tabs>
    </div>
</div>