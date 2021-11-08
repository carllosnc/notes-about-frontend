<script lang="ts">
  import Header from '../components/Header.vue'

  export default{
    components: {
      Header
    }
  }
</script>

<template>
  <div>
    <Header title="this is a props"> </Header>

    <NuxtLink to="/about"> About page! </NuxtLink>

  </div>
</template>
