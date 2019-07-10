<script>
  import { Switch
  } from "svelma"

  export let title
</script>

<style>
  .columns {
    margin-top: 0.5rem;
  }
  #capture {
    margin-top: 0.3rem;
  }
</style>

<div class="columns">
  <div class="column">
    <h1 class="title">{title}</h1>
  </div>
  <div class="column is-narrow">
    <div class="field" id="capture">
      <Switch checked="true" type="is-info">Capture</Switch>
    </div>
  </div>
</div>
