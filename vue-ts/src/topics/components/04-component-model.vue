<script setup lang="ts">
import { ref, Ref } from 'vue'

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

const input: Ref<string> = ref('')
const inputVerbose: Ref<string> = ref('')

function verboseHandle(e: Event) {
  inputVerbose.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <!-- Model mode -->
  <div class="p-4">
    <input
      placeholder="input model"
      class="p-2 border border-black"
      v-model="input"
      type="text"
    />
    <h1>Value: {{ input }}</h1>
  </div>

  <hr />

  <!-- Verbose mode -->
  <div class="p-4">
    <input
      placeholder="input model"
      class="p-2 border border-black"
      :value="inputVerbose"
      @input="verboseHandle"
      type="text"
    />
    <h1>Value: {{ inputVerbose }}</h1>
  </div>

  <hr />

  <!-- Component v-model -->
  <div class="p-4">
    <input
      placeholder="input model"
      class="p-2 border border-black"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      type="text"
    />
    <h1>value: {{ modelValue }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>
