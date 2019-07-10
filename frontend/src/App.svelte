<script>
  import { Switch,
    Tabs,
    Tab,
  } from "svelma";
  import { Overview, CameraSettings, TitleBar } from "./Fragments/all.js";

  export let CameraName = "Wildlife Camera";
</script>



<div class="container">
  <TitleBar title={CameraName}/>
  <Tabs>
    <Tab label="Overview" active>
      <Overview {CameraName} />
    </Tab>
    <Tab label="Download Pictures">a</Tab>
    <Tab label="Camera Settings">
      <CameraSettings />
    </Tab>
    <Tab label="Sensor Settings">a</Tab>
    <Tab label="Advanced Settings">a</Tab>
  </Tabs>

</div>
