<script>
  export default {
    data(){
      return {
        show: true
      }
    }
  }
</script>

<template>

  <div>
    <h1 v-show="show"> show this </h1>
    <h1 v-show="!show"> don't show this </h1>
  </div>

</template>

