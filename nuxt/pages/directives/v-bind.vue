<script lang='ts'>
  export default {
    data(){
      return {
        imageSrc: 'https://images.unsplash.com/photo-1635863150838-f9f6aad9c209?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        buttonAttr: 'disabled',
        buttonValue: true,
        isRed: true,
        size: 32,
        customStyle: {
          color: 'white',
          border: 'solid red 1px',
          backgroundColor: 'black',
          padding: '20px'
        },
        myId: 'my-id'
      }
    }
  }
</script>

<template>
  <div>

    <!-- bind and attribute -->
    <img v-bind:src="imageSrc" >

    <!-- shorthand -->
    <img :src="imageSrc" >

    <!-- with inline string concatenation -->
    <img :src="imageSrc" :alt="'this' + ' is' + ' a' + ' concatenation'">

    <!-- class binding -->
    <h1 :class="{ red: isRed }"> class binding </h1>
    <h1 :class="['red', 'border']"> class binding </h1>
    <h1 :class="['bg', 'border', {red: isRed}]"> class binding </h1>

    <!-- class style binding -->
    <span :style="{ fontSize: size + 'px'}"> style binding </span>
    <h1 :style="[customStyle]"> style binding </h1>

    <!-- binding an object of attributes -->
    <h1 v-bind="{ id: myId }"> Binding an object of attributes </h1>

  </div>
</template>

<style scoped>
  .red{
    color: red;
  }
  .border {
    border: solid blue 4px;
  }
  .bg{
    background: black;
  }
</style>
