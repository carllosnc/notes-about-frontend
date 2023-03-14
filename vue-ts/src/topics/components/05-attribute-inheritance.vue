<script setup lang="ts">
import { ref } from 'vue'

function internalListerner() {
  console.log('internal listener')
}
</script>

<template>
  <button @click="internalListerner" class="p-4 border border-black">
    A button
  </button>
</template>

<style lang="scss" scoped></style>
