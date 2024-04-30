import { useEffect } from 'react'

function DataController() {
  const data = document.querySelector('#data')
  const value = document.querySelector('#value')
  const increment: HTMLButtonElement = document.querySelector('#increment')!
  const decrement: HTMLButtonElement = document.querySelector('#decrement')!

  value!.innerHTML = '10'

  function incrementValue() {
    value!.innerHTML = String(parseInt(value!.innerHTML) + 1)
  }

  function decrementValue() {
    value!.innerHTML = String(parseInt(value!.innerHTML) - 1)
  }

  increment!.onclick = incrementValue
  decrement!.onclick = decrementValue
}

export function Data() {
  useEffect(() => {
    DataController()
  }, [])

  return (
    <div id="data" className="p-4">
      <div className="flex gap-4">
        <button id="increment" className="p-4 bg-blue-600 text-white roundedq">
          increment
        </button>
        <button id="decrement" className="p-4 bg-blue-600 text-white roundedq">
          decrement
        </button>
      </div>
      <h1 id="value" className="text-2xl">
        0
      </h1>
    </div>
  )
}
