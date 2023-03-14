import { createApp } from 'vue'
import './index.css'
import App from './App.vue'

// topics
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
import ListenToEvents from './topics/components/02-listering-to-events.vue'
import Slots from './topics/components/03-slots.vue'
import ComponentModel from './topics/components/04-component-model.vue'
import AttributeInheritance from './topics/components/05-attribute-inheritance.vue'

const app = createApp(App)

app.mount('#app')
app
  // topics
  .component('CounterOptions', CounterOptions)
  .component('CounterComposition', CounterComposition)
  .component('TemplateSyntax', TemplateSyntax)
  .component('Reactivity', Reactivity)
  .component('ComputedProperties', ComputedProperties)
  .component('StyleBinding', StyleBinding)
  .component('ConditionalRendering', ConditionalRendering)
  .component('ListRendering', ListRendering)
  .component('EventHandling', EventHandling)
  .component('FormInputBinding', FormInputBinding)
  .component('LifecycleHooks', LifecycleHooks)
  .component('Watchers', Watchers)
  .component('TemplateRef', TemplateRef)

  // components
  .component('ListenToEvents', ListenToEvents)
  .component('Slots', Slots)
  .component('PassingProps', PassingProps)
  .component('ComponentModel', ComponentModel)
  .component('AttributeInheritance', AttributeInheritance)
