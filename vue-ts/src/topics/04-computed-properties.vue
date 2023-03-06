<script setup lang="ts">
import { reactive, computed, ref } from "vue";

const author = reactive({
  firstName: "John",
  lastName: "Doe",
  books: ["Vue 3 Guide", "Vue 3 API Reference", "Vue Mastery"],
});

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "yes" : "no";
});
</script>

<template>
  <div>
    <p>has published books:</p>
    <span>{{ author.books.length > 0 ? "yes" : "no" }}</span>
  </div>

  <hr />

  <div>
    <p>has published books:</p>
    <span> {{ publishedBooksMessage }}</span>
  </div>
</template>
