<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";

const input: Ref<HTMLInputElement | null> = ref(null);

onMounted(() => {
  input.value!.focus();
});
</script>

<template>
  <div class="p-4">
    <input class="p-3 border border-black" type="text" ref="input" />
  </div>
</template>

<style lang="scss" scoped></style>
