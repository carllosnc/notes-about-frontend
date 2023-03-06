<script lang="ts">
// options API

export default {
  //properites returned from data()O become reative state
  //and will be exposed on 'this'
  data() {
    return {
      count: 0,
    };
  },

  //methos are function that mutate state and trigger updates
  //they can be bound as event listeners in templates
  methods: {
    increment() {
      this.count++;
    },
  },

  //lifecycle hooks are called at diferent stages
  //of a component's lifecycle
  //this function will be called when the component is mounted
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>
