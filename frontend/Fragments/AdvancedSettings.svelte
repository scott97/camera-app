<script>
  import { Button, Field, Input } from "svelma";

  // Sensor
  export let advanced = {
    wifiSSID: 'WildlifeCamera',
  };
</script>

<h2 class="subtitle">Advanced Settings</h2>

    <Field label="Wifi SSID">
      <Input type="text" bind:value={advanced.wifiSSID} />
    </Field>

