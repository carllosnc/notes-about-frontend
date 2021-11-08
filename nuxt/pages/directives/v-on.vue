<script>
  export default {
    data(){
      return {
        event: 'click'
      }
    },
    methods: {
      doThis: function(){
        console.log('clicked!')
      },

      doThat: function(arg, event){
        console.log(arg, event)
      }
    }
  }
</script>

<template>
  <div>
    <!-- method handle -->
    <button v-on:click="doThis"> method handle </button>

    <!-- shorthand -->
    <button @click="doThis"> Shorthand directive </button>

    <br>
    <!-- dynamic event -->
    <button v-on:[event]="doThis"> dynamic event </button>

    <br>
    <!-- inline statement -->
    <button v-on:[event]="doThat('hello', $event)"> inline statement </button>

    <br>
    <!-- stop propagation -->
    <button @click.stop="doThis"> stop propagation </button>

    <br>
    <!-- prevent default -->
    <button @click.prevent="doThis"> prevent default </button>
  </div>
</template>
