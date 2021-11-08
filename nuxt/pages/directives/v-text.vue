<script lang="ts">
  export default {
    data(){
      return {
        text: 'hello world!'
      }
    }
  }
</script>

<template>

  <div>
    <span> {{ text }} </span>
    <br>
    <span v-text="text"> </span>
  </div>

</template>
