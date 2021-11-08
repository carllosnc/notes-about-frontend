<script>
  export default {
    data() {
      return {
        inputModel: '',
        textareaModel: '',
        check: false,
        multiChecks: [],
        radio: '',
        selected: ''
      }
    }
  }
</script>

<template>

  <div>
    <!-- input model -->
    <input v-model="inputModel">
    <h1 :style="{ color: 'red' }"> {{ inputModel }} </h1>

    <hr>

    <!-- textarea model -->
    <textarea v-model="textareaModel" id="" cols="30" rows="10"></textarea>
    <h1 :style="{ color: 'blue'}"> {{ textareaModel }} </h1>

    <hr>

    <!-- checkbox model -->
    <input type="checkbox" v-model="check">
    {{ check }}

    <hr>

    <!-- multiple checks -->
    <label>
      <input type="checkbox" value="jack" v-model="multiChecks" >
      Jack
    </label>

    <label>
      <input type="checkbox" value="john" v-model="multiChecks" >
      John
    </label>

    <label>
      <input type="checkbox" value="maria" v-model="multiChecks" >
      Maria
    </label>
    <br>
    values: {{ multiChecks }}

    <hr>

    <!-- radio -->
    <label for="one">
      <input type="radio" id="one" value="One" v-model="radio">
      One
    </label>

    <label for="two">
      <input type="radio" id="two" value="Two" v-model="radio">
      Two
    </label>
    <br>
    Picked: {{ radio }}

    <hr>

    <!-- selected  -->
    <select v-model="selected">
      <option disabled value=""> Select a value </option>
      <option value="first"> First </option>
      <option value="second"> Second </option>
      <option value="third"> Third </option>
    </select>

    {{ selected }}

  </div>

</template>
