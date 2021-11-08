<script>
  export default {
    data(){
      return {
        info: 'loading...'
      }
    },

    mounted(){
      this.$axios
        .get('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
        .then(res => {
          this.info = res.data.join('')
        })
    }
  }
</script>

<template>
  <div>
    <h1> {{ info }} </h1>
  </div>
</template>
