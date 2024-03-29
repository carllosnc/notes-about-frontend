import { useEffect, useRef } from 'react'
import { CounterController } from './counter.controller'

export function Counter() {
  const countRef = useRef<HTMLParagraphElement>(null)
  const incrementRef = useRef<HTMLButtonElement>(null)
  const decrementRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    CounterController({
      countRef: countRef.current!,
      increment: incrementRef.current!,
      decrement: decrementRef.current!,
    })
  }, [])

  return (
    <div className="p-[100px]">
      <p
        ref={countRef}
        className="p-4 transition-all text-[40px] text-white bg-black w-[100px] h-[100px] flex justify-center items-center"
      />
      <button
        ref={incrementRef}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <button
        ref={decrementRef}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
  )
}
