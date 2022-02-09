<script>
  let style = "black";

  style = "red";
</script>

<div>
  <h1 class={style}>Check svelte style!!</h1>
</div>

<style>
  .black {
    color: white;
    padding: 10px 20px 10px 20px;
    border-radius: 100px;
    background-color: black;
  }

  .blue {
    color: white;
    padding: 10px 20px 10px 20px;
    border-radius: 100px;
    background-color: blue;
  }

  .red {
    color: white;
    padding: 10px 20px 10px 20px;
    border-radius: 100px;
    background-color: red;
  }
</style>
