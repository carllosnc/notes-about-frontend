<script lang="ts">
  const V = {
    props: ['title'],
    data(){
      return {
        text: "Foo component!"
      }
    }
  }

  export default V
</script>

<template>
  <div class="content">
    <h1 class="title">
      {{ title }}
    </h1>

    <button @click="$emit('myaction', 'pass this string to element!')"> Clickme! </button>

    SLOT HERE -> <slot> </slot>
  </div>
</template>

<style>

  .content{
    border: solid red 10px;
    padding: 20px;
  }

  .title{
    color: white;
    padding: 20px;
    background: red;
    font-family: sans-serif;
    font-weight: normal;
  }

</style>
