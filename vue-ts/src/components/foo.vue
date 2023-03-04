<script setup lang="ts">
  import { ref } from 'vue'
  console.log('hello world!')

  defineProps<{
    msg: string,
    items: string[]
  }>()

  let count = ref(0)
</script>

<template>

  <!-- on click here! -->
  <button @click="count++"> Increment </button>

  <h1> Counter: {{ count }} </h1>

  <div> Message: {{ msg }} </div>

  <div v-for="(item, index) in items" :key="index">
    <p> {{ item }}</p>
  </div>

</template>
