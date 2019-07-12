<script>
  import { Button, Field, Input } from "svelma";
  import Slider from "../SvelmaExtra/Slider.svelte";
  import Select from "../SvelmaExtra/Select.svelte";

  // Sensor
  export let sensor = {
    // Sliders
    debounce: 10,
  };
</script>

<h2 class="subtitle">Sensor Settings</h2>

    <Field label="Sensor Debounce (ms)">
      <Slider step="5" min="0" max="100" bind:value={sensor.debounce} />
    </Field>

