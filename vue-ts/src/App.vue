<script setup lang="ts">
import CounterOptions from './topics/01-options-style.vue'
import CounterComposition from './topics/02-composition-style.vue'
import TemplateSyntax from './topics/05-template-syntax.vue'
import Reactivity from './topics/03-reactivity.vue'
import ComputedProperties from './topics/04-computed-properties.vue'
import StyleBinding from './topics/06-style-binding.vue'
import ConditionalRendering from './topics/07-conditional-rendering.vue'
import ListRendering from './topics/08-list-rendering.vue'
import EventHandling from './topics/09-event-handling.vue'
import FormInputBinding from './topics/10-form-input-binding.vue'
import LifecycleHooks from './topics/11-lifecycle-hooks.vue'
import Watchers from './topics/12-watchers.vue'
import TemplateRef from './topics/13-template-ref.vue'

// components

import PassingProps from './topics/components/01-passing-props.vue'
import ListeringToEvents from './topics/components/02-listering-to-events.vue'
import Slots from './topics/components/03-slots.vue'

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

  <Slots> <h1 class="text-red-500 font-bold">Hello world</h1> </Slots>
</template>
