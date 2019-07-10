<script>
    export let options;
    export let value;
</script>



<div class="control">
  <div class="select">
    <select bind:value={value}>
      {#each options as option}
        <option>{option}</option>
      {/each}
    </select>
  </div>
</div>
