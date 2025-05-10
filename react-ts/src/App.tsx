import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const TooltipComponent = () => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  useLayoutEffect(() => {
    if (isTooltipVisible && buttonRef.current && tooltipRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()

      // Position tooltip above the button
      setTooltipPosition({
        top: buttonRect.top - tooltipRect.height - 8,
        left: buttonRect.left + (buttonRect.width - tooltipRect.width) / 2,
      })
    }
  }, [isTooltipVisible])

  return (
    <div className="p-16 relative">
      <button
        ref={buttonRef}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        Hover me
      </button>

      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className="absolute bg-gray-800 text-white px-4 py-2 rounded text-sm"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
          }}
        >
          This tooltip position is calculated synchronously!
        </div>
      )}
    </div>
  )
}

function Foo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('hello world!')

    return () => {}
  }, [])

  function increment() {
    setCount((s) => s + 1)
  }

  return (
    <div className="border border-red-500 p-4">
      <h1 className="text-[80px]"> {count} </h1>
      <button className="p-4 border border-black" onClick={increment}>
        increment
      </button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Foo />
      <TooltipComponent />
    </div>
  )
}

export default App
