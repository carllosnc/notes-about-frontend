import { useEffect, useRef } from 'react'

function LoopController(element: HTMLDivElement) {
  let items = ['Hello', 'World']

  items.forEach((item) => {
    const span = document.createElement('span')
    span.innerText = item
    element.appendChild(span)
  })
}

export function Loop() {
  const divRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (divRef.current) {
      LoopController(divRef.current)
    }
  })

  return <div ref={divRef}></div>
}
