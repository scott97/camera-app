<script>
  export let step;
  export let min;
  export let max;
  export let value;
</script>

<style>
  @-webkit-keyframes spinAround {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @keyframes spinAround {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
  input {
    appearance: none;
    margin: 1rem 0;
    background: 0 0;
    display: block;
    width: calc(100% - (4.7rem));
    display: inline-block;
  }
  input:focus {
    outline: 0;
  }
  output {
    width: 3.5rem;
    background: #4a4a4a;
    border-radius: 4px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #fff;
    overflow: hidden;
    pointer-events: none;
    z-index: 200;
    display: inline-block;
    position: relative;
    margin-left: 0.75rem;
    top: -0.75rem;
  }
</style>

<input
  class="slider control is-small is-circle"
  bind:value
  {step}
  {min}
  {max}
  type="range" />
<output>{value}</output>
