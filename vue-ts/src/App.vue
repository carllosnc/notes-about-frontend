<script setup lang="ts">
import { ref, Ref } from 'vue'

const inputValue: Ref<string> = ref('')

const posts = [
  {
    title: 'My journey with Vue',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Blogging with Vue',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Why Vue is so fun',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

function fn(arg: string) {
  console.log(arg)
}

function externalListener() {
  console.log('external listener')
}
</script>

<template>
  <!-- <CounterOptions /> -->
  <!-- <CounterComposition /> -->
  <!-- <TemplateSyntax /> -->
  <!-- <Reactivity /> -->
  <!-- <ComputedProperties /> -->
  <!-- <StyleBinding /> -->
  <!-- <ConditionalRendering /> -->
  <!-- <ListRendering /> -->
  <!-- <EventHandling /> -->
  <!-- <FormInputBinding /> -->
  <!-- <LifecycleHooks /> -->
  <!-- <Watchers /> -->
  <!-- <TemplateRef /> -->

  <!-- Components -->

  <!-- <PassingProps title="Passing a title" start="10" /> -->

  <!-- <ListeringToEvents
    v-for="post in posts"
    @action="fn"
    :key="post.title"
    :title="post.title"
    :content="post.content"
  /> -->

  <!-- <Slots>
    <h1 class="text-red-500 font-bold">Hello world</h1>
  </Slots> -->

  <!-- <ComponentModel v-model="inputValue" />
  <div>Value from component: {{ inputValue }}</div> -->

  <AttributeInheritance class="bg-yellow-300" @click="externalListener" />
</template>
