<script setup lang="ts">
import { ref, onMounted } from "vue";

// reactive state
let count = ref(0);

// function increment that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hook
onMounted(() => {
  console.log(`The initial count is ${count.value}`);
});
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<style lang="postcss"></style>
