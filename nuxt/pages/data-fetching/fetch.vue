<script lang="ts">
  import Vue from 'vue'

  type Post = {
    image: string,
    title: string,
    description: string,
    id: number
  }

  export default Vue.extend({
    data(){
      const posts: Post[] = []

      return {
        posts
      }
    },

    watch: {
      '$route.query': '$fetch'
    },

    async fetch(){
      const result = await this.$axios.$get('https://api.nuxtjs.dev/posts')
      console.log(result)
      this.posts = result
    },

    fetchOnServer: false,
    fetchKey: 'site-sidebar',

    mounted(){
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
    }

  })
</script>

<template>
  <div>
    <!-- acessing the fetch state -->
    <h1 v-if="$fetchState.pending"> Loading posts... </h1>

    <h1 v-else-if="$fetchState.error"> An error occurred </h1>

    <div v-else>
      <div>
        <!-- Reloading the elements here! -->
        <button @click="$fetch"> Reload </button>
      </div>

      <br>

      <div class="card" v-for="post in posts" :key="post.id">
        <img class="card__image" :src="post.image" :alt="post.title">
        <div>
          <h1> {{ post.title }} </h1>
          <p> {{ post.description }} </p>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  .card{
    padding: 20px;
    background-color: #e7e7e7;
    border: solid red 2px;
    margin-bottom: 10px;
    display: flex;
    gap: 40px;
  }

  .card__image{
    width: 200px;
    min-width: 200px;
    height: 200px;
    padding: 10px;
    background-color: white;
    border: solid red 2px;
    object-fit: cover;
  }
</style>
