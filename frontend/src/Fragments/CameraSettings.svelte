<script>
    import { Button, Collapse, Dialog, Field, Icon, Input, Message, Progress, Modal, Snackbar, Switch, Tabs, Tab, Toast } from 'svelma'
    import Slider from '../SvelmaExtra/Slider.svelte'

    export let sensor = {
        sharpness: 0,
        contrast: 0,
        brightness: 50,
        saturation: 0,
        iso: 450,
        evcompensation: 0,
    }
    

</script>

<h1 class="title">Camera Settings</h1>

<div class="columns">
    <div class="column">
        <Field label="Sharpness"> 
            <Slider step=10 min=-100 max=100 bind:value={sensor.sharpness}/>
        </Field>

        <Field label="Contrast"> 
            <Slider step=10 min=-100 max=100 bind:value={sensor.contrast}/>
        </Field>

        <Field label="Brightness"> 
            <Slider step=5 min=0 max=100 bind:value={sensor.brightness}/>
        </Field>

        <Field label="Saturation"> 
            <Slider step=10 min=-100 max=100 bind:value={sensor.saturation}/>
        </Field>

        <Field label="ISO"> 
            <Slider step=50 min=100 max=800 bind:value={sensor.iso}/>
        </Field>

        <Field label="EV Compensation"> 
            <Slider step=1 min=-10 max=10 bind:value={sensor.evcompensation}/>
        </Field>

    </div>
    <div class="column">
    
    </div>
</div>

