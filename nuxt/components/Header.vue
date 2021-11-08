<script lang="ts">
  export default {
    props: {
      title: String
    }
  }
</script>

<template>
  <header class="header">
    <div>
      <h1> {{ title }} </h1>
    </div>
  </header>
</template>

<style lang="scss">
  .header{
    background: black;
    color: white;
    padding: 20px 50px;
    border: solid red 10px;
    width: 100%;
  }
</style>
