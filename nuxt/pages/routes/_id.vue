<script>
  export default {
    data(){
      return {
        id: ''
      }
    },

    mounted(){
      // path
      console.log('path', this.$route.path)

      // params
      console.log('params', this.$route.params)

      // query
      console.log('query', this.$route.query)

      // full path
      console.log('full path', this.$route.fullPath)

      this.id = this.$route.params.id
    }
  }
</script>

<template>
  <h1> The params is ---: {{ id }} </h1>
</template>

<style>

</style>
