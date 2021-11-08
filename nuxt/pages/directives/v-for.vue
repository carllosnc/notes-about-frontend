<script>
  export default {
    data(){
      return {
        items: [ 'first', 'second', 'third' ],
        objects: [
          { id: '01', name: 'Bob' },
          { id: '02', name: 'Janne' },
          { id: '02', name: 'Moe' }
        ]
      }
    }
  }
</script>

<template>
  <div>
    <h1 v-for="(item, index) in items" :key="index">
      {{ item }}
    </h1>

    <h1 v-for="item in objects" :key="item.id">
      {{ item.id }} {{ item.name }}
    </h1>
  </div>
</template>
