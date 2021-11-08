<script>
  export default {
    data(){
      return {
        condition: Math.random() > 0.5
      }
    }
  }
</script>

<template>
  <div>
    <h1 v-if="condition"> Now tou see me </h1>
    <h1 v-else> Now tou don't </h1>
  </div>
</template>
