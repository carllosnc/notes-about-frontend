<script setup lang="ts">
import { ref, Ref } from 'vue'
const input: Ref<string> = ref('')
const textArea = ref('')
const select = ref('')
const checkbox = ref(false)
const radio = ref('')
const multipleSelect = ref([])
</script>

<template>
  <!-- input -->
  <div class="p-4">
    <input class="p-3 border border-black" v-model="input" />
    <span> Value: {{ input }} </span>
  </div>

  <hr />

  <!-- textarea -->
  <div class="p-4">
    <textarea class="p-3 border border-black" v-model="textArea"> </textarea>
    {{ textArea }}
  </div>

  <hr />

  <!-- select -->
  <div class="p-4">
    <select class="p-3 border border-black" v-model="select">
      <option value="1" selected>One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    {{ select }}
  </div>

  <hr />

  <!-- checkbox -->
  <div class="p-4">
    <input type="checkbox" v-model="checkbox" />
    {{ checkbox }}
  </div>

  <hr />

  <!-- radio -->
  <div class="p-4">
    <div>
      <label class="p-2 border border-black">
        <input type="radio" value="item: 1" v-model="radio" />
        <span> item1 </span>
      </label>

      <label class="p-2 border border-black">
        <input type="radio" value="item: 2" v-model="radio" />
        <span> item2 </span>
      </label>

      <label class="p-2 border border-black">
        <input type="radio" value="item: 3" v-model="radio" />
        <span> item3 </span>
      </label>
    </div>
    <br />
    <p>{{ radio }}</p>
  </div>

  <hr />

  <!-- multiple select -->
  <div class="p-4">
    <select class="p-3 border border-black" v-model="multipleSelect" multiple>
      <option value="1" selected>One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    {{ multipleSelect }}
  </div>
</template>

<style lang="scss" scoped></style>
