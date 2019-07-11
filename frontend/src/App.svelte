<script>
    import {
        Switch,
        Tabs,
        Tab
    } from "svelma";
    import {
        Overview,
        CameraSettings,
        SensorSettings,
        AdvancedSettings,
        TitleBar
    } from "./Fragments/all.js";

    // Data
    let Settings;
    Settings.cameraName = "Wildlife Camera";

    // Debug
    // $: {
    //     console.log(Settings);
    // }
</script>

<style>
    .section {
        padding: 1.5rem 1.5rem;
    }
</style>

<div class="section">
    <div class="container">
        <TitleBar title={Settings.cameraName} />
        <Tabs>
            <Tab label="Overview" active>
                <Overview bind:cameraName={Settings.cameraName} />
            </Tab>

            <Tab label="Download Pictures">a</Tab>

            <Tab label="Camera Settings">
                <CameraSettings bind:cameraSettings={Settings.cameraSettings} />
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