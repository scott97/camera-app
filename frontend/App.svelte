<script>
    import {
        Switch,
        Tabs,
        Tab, 
        Progress
    } from "svelma";
    import Overview from './Fragments/Overview.svelte'
    import CameraSettings from './Fragments/CameraSettings.svelte'
    import SensorSettings from './Fragments/SensorSettings.svelte'
    import AdvancedSettings from './Fragments/AdvancedSettings.svelte'
    import TitleBar from './Fragments/TitleBar.svelte'
    import DownloadPictures from './Fragments/DownloadPictures.svelte'

    import { onMount } from 'svelte';

    // Load Settings
    let Settings = {};
    let ready = false;
	
	onMount(async () => {
		const response = await fetch('api/settings');
        Settings = await response.json();
        ready = true;
	});


    // Update
    $: {
        // What changes shoud trigger updates
        Settings; 

        // Updates
        if (ready){
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
    }
</script>

<style>
    .section {
        padding: 1.5rem 1.5rem;
    }
    #loading {
        text-align: center;
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