<script setup lang="ts">
import { ref } from "vue";
const active = ref(true);
const type = ref("A");

function toggleRef() {
  active.value = !active.value;
}
</script>

<template>
  <!-- v-if / v-else -->

  <div class="p-5">
    <h1 v-if="active" class="p-2 bg-green-600">Active = true</h1>
    <h1 v-else class="p-2 bg-red-500">Active = false</h1>
    <button @click="toggleRef" class="p-3 border border-black">
      Toggle activity
    </button>
  </div>

  <hr />

  <!-- v-else-if -->

  <div class="p-5">
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else>C</div>
  </div>

  <!-- v-show example -->

  <div class="p-5">
    <h1 v-show="active" class="p-2 bg-green-600">Active = true</h1>
    <h1 v-show="!active" class="p-2 bg-red-500">Active = false</h1>

    <button @click="toggleRef" class="p-3 border border-black">
      Toggle activity
    </button>
  </div>
</template>

<style lang="postcss" scoped></style>
