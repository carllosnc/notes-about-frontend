<script setup lang="ts">
import { ref, defineProps } from 'vue'

// a simple way to define props
const props = defineProps<{
  title?: string
  start?: number
}>()

// a more verbose way to define props
const counter = ref(props.start)

function increment() {
  counter.value!++
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Counter: {{ counter }}</p>
    <button class="p-2 border border-black" @click="increment">
      Increment
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
