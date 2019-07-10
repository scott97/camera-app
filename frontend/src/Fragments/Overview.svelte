<script>
    import { Button, Field, Input } from 'svelma'
    export let CameraName;
</script>

<h2 class="subtitle">Overview</h2>
<Field label="Camera Name"> 
	<Input type="text" bind:value={CameraName} />
</Field>