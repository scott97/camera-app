<script>
    import {
        Button,
        Field,
        Input
    } from "svelma";
    import Slider from "../SvelmaExtra/Slider.svelte";
    import Select from "../SvelmaExtra/Select.svelte";

    // Camera Settings
    // Sliders
    export let sharpness;
    export let contrast;
    export let brightness;
    export let saturation;
    export let iso;
    export let evCompensation;

    // Dropdown options
    export let orientation;
    export let exposureMode;
    export let awb;
    export let metering;
</script>

<h2 class="subtitle">Camera Settings</h2>

<div class="columns">
	<div class="column">
        <Field label="Sharpness">
            <Slider step="10" min="-100" max="100" bind:value={sharpness} />
        </Field>

        <Field label="Contrast">
            <Slider step="10" min="-100" max="100" bind:value={contrast} />
        </Field>

        <Field label="Brightness">
            <Slider step="5" min="0" max="100" bind:value={brightness} />
        </Field>

        <Field label="Saturation">
            <Slider step="10" min="-100" max="100" bind:value={saturation} />
        </Field>

        <Field label="ISO">
            <Slider step="50" min="100" max="800" bind:value={iso} />
        </Field>

        <Field label="EV Compensation">
            <Slider step="1" min="-10" max="10" bind:value={evCompensation} />
        </Field>

    </div>
    <div class="column">
        <Field label="Camera Orientation">
            <Select bind:value={orientation} options={['Normal', 'Inverted' ]} />
        </Field>

        <Field label="Exposure Mode">
            <Select bind:value={exposureMode} options={['Auto', 'Night' , 'Night Preview' , 'Backlight'
                , 'Spotlight' , 'Sports' , 'Snow' , 'Beach' , 'Very Long' , 'Fixed FPS' , 'Anti-shake' , 'Fireworks'
                ]} />
        </Field>

        <Field label="AWB (Auto White Balance)">
            <Select bind:value={awb} options={['Off', 'Auto' , 'Sun' , 'Cloud' , 'Shade' , 'Tungsten'
                , 'Fluorescent' , 'Incandescent' , 'Flash' , 'Horizon' ]} />
        </Field>

        <Field label="Metering">
            <Select bind:value={metering} options={['Average', 'Spot' , 'Backlit' , 'Matrix' ]} />
        </Field>
    </div>    
</div>