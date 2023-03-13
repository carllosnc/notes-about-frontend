<script setup lang="ts">
import { reactive, ref } from 'vue'

const list = ref([
  { id: 1, name: 'Foo' },
  { id: 2, name: 'Bar' },
  { id: 3, name: 'Baz' },
])

const myObject = reactive({
  foo: 'foo',
  baz: 'baz',
})
</script>

<template>
  <!-- for loop -->
  <div>
    <ul>
      <li class="flex gap-2 text-red-600" v-for="item in list" :key="item.id">
        <span> {{ item.id }}. </span>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>

  <hr />

  <!-- for loop objects -->
  <div>
    <ul>
      <li
        class="flex gap-2 text-blue-600"
        v-for="(value, key) in myObject"
        :key="key"
      >
        <span> {{ key }}: </span>
        <p>{{ value }}</p>
      </li>
    </ul>
  </div>

  <hr />

  <!-- v-for with range -->
  <div>
    <ul>
      <li class="flex gap-2 text-green-600" v-for="n in 10" :key="n">
        <span> {{ n }}. </span>
        <p>Item</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
