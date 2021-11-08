<script>
  export default {
    data(){
      return {
        htmlCode: '<span style="color: red"> html code here! </span>'
      }
    }
  }
</script>

<template>

  <div>
    <span> {{ htmlCode }} </span>
    <div v-html="htmlCode"> </div>
  </div>

</template>
