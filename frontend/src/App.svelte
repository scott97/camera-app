<script>
  import { Switch, Tabs, Tab } from "svelma";
  import { Overview, CameraSettings, SensorSettings, AdvancedSettings, TitleBar } from "./Fragments/all.js";

  export let CameraName = "Wildlife Camera";
</script>

<style>
  .section {
    padding: 1.5rem 1.5rem;
  }
</style>

<div class="section">
  <div class="container">
    <TitleBar title={CameraName} />
    <Tabs>
      <Tab label="Overview" active>
        <Overview bind:CameraName={CameraName} />
      </Tab>

      <Tab label="Download Pictures">a</Tab>

      <Tab label="Camera Settings">
        <CameraSettings />
      </Tab>

      <Tab label="Sensor Settings">
        <SensorSettings/>
      </Tab>

      <Tab label="Advanced Settings">
        <AdvancedSettings/>
      </Tab>

    </Tabs>
  </div>
</div>
