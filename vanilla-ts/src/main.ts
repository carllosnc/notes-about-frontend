// let form = document.getElementById('form') as HTMLFormElement

// form.addEventListener('submit', (e) => {
//   e.preventDefault()

//   const file = form.elements.namedItem('fileupload') as HTMLInputElement
//   const item = file.files?.[0]
//   const blob = new Blob([item!], { type: item!.type })
//   const size = (blob.size / 1024 / 1024).toFixed(2)

//   console.log(size, 'MB')

//   blob.arrayBuffer().then((buffer) => {
//     console.log(buffer)
//   })
// })

// const textBlob = new Blob(['Hello world!'], { type: 'text/plain' })

// const multipartBlob = new Blob(['first', 'second', 'third'], {
//   type: 'multipart/form-data',
// })

// const jsonBlob = new Blob([JSON.stringify({ name: 'John Doe' })], {
//   type: 'application/json',
// })

// write a debounce function here

function debounce(func: Function, delay: number) {
  let timeoutId: number

  return function (...args: string[]) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(function (this: any) {
      func.apply(this, args)
    }, delay)
  }
}

const expensivesearch = (query: string) => {
  console.log('searching for', query)
}

const expensiveSearchDebounced = debounce(expensivesearch, 1000)

const searchInput = document.querySelector('#search-input') as HTMLInputElement

searchInput.addEventListener('input', (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  expensiveSearchDebounced(value)
})
