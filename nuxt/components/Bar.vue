<script lang="ts">
  export default {
    data(){
      return {
        text: "Bar component"
      }
    }
  }
</script>

<template>
  <div>
    <h1 class="title"> Bar component </h1>
  </div>
</template>

<style scoped>
  .title{
    padding: 20px;
    background: blue;
    color: white;
  }
</style>
