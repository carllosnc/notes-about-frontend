<script setup lang="ts">
import { ref, watch } from "vue";

const question = ref("");
const myAnswer = ref("Questions usually contain a question mark.");

// watch working directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    myAnswer.value = "Thinking...";

    try {
      const response = await fetch(`https://yesno.wtf/api`);
      const { answer } = await response.json();
      myAnswer.value = answer;
    } catch (error) {
      myAnswer.value = "Error! Could not reach the API. " + error;
    }
  }
});
</script>

<template>
  <div>
    <div class="p-4">
      <input
        class="p-3 border border-black"
        type="text"
        v-model="question"
        placeholder="Ask a yes/no question..."
      />
      <p>Answer: {{ myAnswer }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
