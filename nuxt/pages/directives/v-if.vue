<script>
  export default {
    data(){
      return {
        condition: true
      }
    }
  }
</script>

<template>
  <div>
    <h1 v-if="condition"> show this </h1>
    <h1 v-if="!condition"> don't show this </h1>
    <h1 v-if="10 > 20"> false condition </h1>
    <h1 v-if="10 < 20"> true condition </h1>
  </div>
</template>
