<script setup lang="ts">
//https://vuejs.org/guide/essentials/template-syntax.html#directives

import { ref } from 'vue'

const attrs = {
  id: 'container',
  class: 'wrapper',
}

const number = 10
const ok = true
const message = 'Hello World'
const item = ref('A simple variable')
const id = 'my-id'
const rawHtml = '<span style="color: red">Raw HTML</span>'

function fn() {
  return 'A function'
}

function alertMe() {
  alert('Alert!')
}
</script>

<template>
  <div>
    <!-- interpolation -->
    {{ item }}

    <!-- raw html -->
    <div v-html="rawHtml" />

    <!-- atributte bind -->
    <div :id="id">Attribute bind</div>

    <!-- boolean attributes -->
    <input type="checkbox" :disabled="true" />
    <input type="checkbox" :disabled="false" />

    <!-- atributte bind with object -->
    <div v-bind="attrs">Attribute bind with object</div>

    <!-- javascript expressions -->
    {{ number + 1 }}
    {{ Math.random() }}
    {{ ok ? 'YES' : 'NO' }}
    {{ message.split('').reverse().join('') }}

    <!-- calling a function -->
    {{ fn() }}

    <!-- directives -->
    <div v-if="ok">Show if ok is true</div>
    <div v-else>Show if ok is false</div>
    <button @click="alertMe">Alert!</button>
  </div>
</template>
