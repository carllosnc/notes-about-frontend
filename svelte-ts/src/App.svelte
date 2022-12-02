<script>
  import Counter from './lib/Counter.svelte'
  import counterExample from './lib/Counter.svelte?raw'
</script>

<div>
  <Counter startAt={200} interval={100} />

  <br />

  <div>
    <pre>
{counterExample}
    </pre>
  </div>
</div>
