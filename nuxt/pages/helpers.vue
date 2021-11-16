<script>
  export default {}
</script>

<template>
  <div>
    <h1 v-if="$nuxt.isOffline"> You are offline </h1>
    <h1 v-else> You are online </h1>
  </div>
</template>
