<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, ref } from "vue";

const counter = ref(0);

onMounted(() => {
  console.log("onMounted");
});

onUpdated(() => {
  console.log("onUpdated");
});

onUnmounted(() => {
  console.log("onUnmounted");
});
</script>

<template>
  <div>
    <div class="p-4">
      <button class="p-3 border border-black" @click="counter++">
        Click me
      </button>
      <span> Value: {{ counter }} </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
