<!-- a simple component -->
<script lang="ts">
  export let startAt: number = 10
  export let interval: number = 1

  let count: number = startAt

  function increment() {
    count += interval
  }

  function decrement() {
    count -= interval
  }
</script>

<div>
  <h1>{count}</h1>

  <button on:click={increment}> increment </button>
  <button on:click={decrement}> decrement </button>
</div>
