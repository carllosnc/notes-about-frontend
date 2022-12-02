// how to cache this??
// learn more about javascript sets and map
fetch('https://baconipsum.com/api/?type=meat-and-filler')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
