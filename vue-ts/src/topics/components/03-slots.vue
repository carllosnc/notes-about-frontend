<script setup lang="ts">
import { defineProps } from 'vue'
</script>

<template>
  <div class="border border-black p-4">
    <h1>Slot to content</h1>
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
