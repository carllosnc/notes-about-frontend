<script setup lang="ts">
import { reactive, ref } from 'vue'

// limited to objects
const state = reactive({
  count: 0,
})

function increment() {
  state.count++
}

// deep reactivity, it's meant to be used with objects with nested objects
const deepState = reactive({
  count: 0,
  obj: {
    foo: 'bar',
  },
})

function incrementDeep() {
  deepState.count++
  deepState.obj.foo = `baz ${String.fromCharCode(65 + deepState.count)}`
}

// reactive variables(basic values)
const count = ref(0)
function incrementRef() {
  count.value++
}
</script>

<template>
  <div>
    <p>Count: {{ state.count }}</p>
    <button @click="increment">Increment</button>
  </div>

  <hr />

  <div>
    <p>Count: {{ deepState.count }}</p>
    <p>Obj.foo: {{ deepState.obj.foo }}</p>
    <button @click="incrementDeep">Increment</button>
  </div>

  <hr />

  <div>
    <p>Count: {{ count }}</p>
    <button @click="incrementRef">Increment Ref</button>
  </div>
</template>
