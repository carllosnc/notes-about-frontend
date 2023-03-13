<script setup lang="ts">
import { ref, defineProps } from 'vue'

type Props = {
  readonly title?: string
  readonly start?: number
}

const props: Props = defineProps(['title', 'start'])

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
