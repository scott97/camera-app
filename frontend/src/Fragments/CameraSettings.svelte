<script>
  import { Button, Field, Input } from "svelma";
  import Slider from "../SvelmaExtra/Slider.svelte";
  import Select from "../SvelmaExtra/Select.svelte";

  // Camera Settings
  export let cameraSettings = {
    // Sliders
    sharpness: 0,
    contrast: 0,
    brightness: 50,
    saturation: 0,
    iso: 450,
    evcompensation: 0,

    // Dropdown options
    orientation: "Normal",
    exposureMode: "Auto",
    awb: "Off",
    metering: "Average",
  };
</script>

<h2 class="subtitle">Camera Settings</h2>

<div class="columns">
  <div class="column">
    <Field label="Sharpness">
      <Slider step="10" min="-100" max="100" bind:value={cameraSettings.sharpness} />
    </Field>

    <Field label="Contrast">
      <Slider step="10" min="-100" max="100" bind:value={cameraSettings.contrast} />
    </Field>

    <Field label="Brightness">
      <Slider step="5" min="0" max="100" bind:value={cameraSettings.brightness} />
    </Field>

    <Field label="Saturation">
      <Slider step="10" min="-100" max="100" bind:value={cameraSettings.saturation} />
    </Field>

    <Field label="ISO">
      <Slider step="50" min="100" max="800" bind:value={cameraSettings.iso} />
    </Field>

    <Field label="EV Compensation">
      <Slider
        step="1"
        min="-10"
        max="10"
        bind:value={cameraSettings.evcompensation} />
    </Field>

  </div>
  <div class="column">
    <Field label="Camera Orientation">
      <Select
        bind:value={cameraSettings.orientation}
        options={['Normal', 'Inverted']} />
    </Field>

    <Field label="Exposure Mode">
      <Select
        bind:value={cameraSettings.exposureMode}
        options={['Auto', 'Night', 'Night Preview', 'Backlight', 'Spotlight', 'Sports', 'Snow', 'Beach', 'Very Long', 'Fixed FPS', 'Anti-shake', 'Fireworks']} />
    </Field>

    <Field label="AWB (Auto White Balance)">
      <Select
        bind:value={cameraSettings.awb}
        options={['Off', 'Auto', 'Sun', 'Cloud', 'Shade', 'Tungsten', 'Fluorescent', 'Incandescent', 'Flash', 'Horizon']} />
    </Field>

    <Field label="Metering">
      <Select
        bind:value={cameraSettings.metering}
        options={['Average', 'Spot', 'Backlit', 'Matrix']} />
    </Field>
  </div>
</div>
