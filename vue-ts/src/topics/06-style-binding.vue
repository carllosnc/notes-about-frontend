<script setup lang="ts">
import { computed, ref } from "vue";

const isActive = ref(true);
const hasError = ref(false);

function toggleError() {
  hasError.value = !hasError.value;
}

function toggleActive() {
  isActive.value = !isActive.value;
}

// computed classes

const isActiveStyle = computed(() => ({
  isActive: isActive.value,
}));

const hasErrorStyle = computed(() => ({
  hasError: hasError.value,
}));
</script>

<template>
  <div class="p-4 flex flex-col gap-4">
    <h1 class="p-3" :class="isActiveStyle">Is active</h1>
    <h1 class="p-3" :class="hasErrorStyle">Has error</h1>

    <hr class="border-black" />

    <div class="flex gap-4">
      <button @click="toggleActive" class="border border-black p-2">
        Toggle active
      </button>
      <button @click="toggleError" class="border border-black p-2">
        Toggle error
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.isActive {
  @apply bg-green-600 text-white underline font-bold;
}

.hasError {
  @apply bg-red-600 text-white underline font-bold;
}
</style>
