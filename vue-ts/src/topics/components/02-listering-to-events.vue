<script setup lang="ts">
import { defineProps } from "vue";

type Props = {
  readonly title?: string;
  readonly content?: string;
};

const props: Props = defineProps(["title", "content"]);
const emit = defineEmits(["action"]);

function event() {
  emit("action", props.title);
}
</script>

<!-- blog -->
<template>
  <div class="border border-black mb-5 p-5 flex flex-col gap-3">
    <h1 class="font-bold text-2xl">{{ title }}</h1>
    <p>{{ content }}</p>

    <button
      class="p-2 border border-black w-[180px]"
      @click="$emit('action', title)"
    >
      Action
    </button>
    <br />
    <button class="p-2 border border-black w-[180px]" @click="event">
      Another action
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
