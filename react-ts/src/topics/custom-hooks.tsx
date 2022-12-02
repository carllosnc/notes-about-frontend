//-------------------------------------------
// Custo hooks
//-------------------------------------------

import { useState } from 'react'

function useCount(start: number): {
  count: number
  increment: () => void
  decrement: () => void
} {
  const [count, setCount] = useState<number>(start)

  function increment() {
    setCount((s) => s + 1)
  }

  function decrement() {
    setCount((s) => s - 1)
  }

  return { count, increment, decrement }
}

export function App() {
  const { count, decrement, increment } = useCount(10)

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={increment}> increment </button>
      <button onClick={decrement}> decrement </button>
    </div>
  )
}
