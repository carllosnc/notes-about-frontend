<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

function warn(message: string, event: Event) {
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

function fn() {
  console.log('fn')
}
</script>

<template>
  <!-- inline handle -->
  <div class="p-2">
    <button class="p-2 border border-black" @click="count++">
      Add: {{ count }}
    </button>
  </div>

  <hr />

  <!-- method handle -->
  <div class="p-2">
    <button class="p-2 border border-black" @click="increment">
      Add: {{ count }}
    </button>
  </div>

  <hr />

  <!-- event handler with arguments -->
  <div class="p-2 flex gap-2">
    <button
      class="p-2 border border-black"
      @click="warn('Are you sure?', $event)"
    >
      Click me
    </button>

    <button
      class="p-2 border border-black"
      @click="(event) => warn('Form cannot be summited yet', event)"
    >
      Click me!
    </button>
  </div>

  <!-- event modifiers -->

  <hr />

  <!-- the click event's propagation will be stopped -->
  <div class="p-2">
    <a @click.stop="fn"></a>
    <form @submit.prevent="fn"></form>
    <a @click.stop.prevent="fn"></a>
    <form @submit.prevent></form>
    <div @click.self="fn"></div>
  </div>
</template>

<style lang="scss" scoped></style>
