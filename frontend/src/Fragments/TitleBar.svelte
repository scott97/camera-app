<script>
  import { Switch
  } from "svelma"

  export let title
</script>

<style>
  #capture {
    margin-top: 0.32rem;
  }
</style>

<div class="columns is-mobile">
  <div class="column ">
    <h1 class="title">{title}</h1>
  </div>
  <div class="column is-narrow">
    <div class="field" id="capture">
      <Switch checked="true" type="is-info">Capture</Switch>
    </div>
  </div>
</div>
