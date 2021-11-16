<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    async asyncData({ params, $axios }) {
      const posts = await $axios.$get(`https://api.nuxtjs.dev/posts`)
      return { posts }
    }
  })

</script>

<template>
  <!-- working like a serve side render -->
  <div>
    <div v-for="post in posts" :key="post.id">
      <h1> {{ post.title }} </h1>
      <p> {{ post.description }} </p>
      <hr>
    </div>
  </div>
</template>

<style>

</style>
