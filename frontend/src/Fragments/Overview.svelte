<script>
    import { Button, Collapse, Dialog, Field, Icon, Input, Message, Progress, Modal, Snackbar, Switch, Tabs, Tab, Toast } from 'svelma'
    export let CameraName
</script>

<h1 class="title">Overview</h1>
<Field label="Camera Name"> 
	<Input type="text" bind:value={CameraName} />
</Field>