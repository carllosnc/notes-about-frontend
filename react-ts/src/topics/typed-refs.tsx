import { useRef, Fragment } from 'react'

//-------------------------------------------
// type useRef
//-------------------------------------------

export function TypedRefs() {
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Fragment>
      <h1 ref={h1Ref} />
      <div ref={divRef} />
      <img ref={imageRef} />
      <input ref={inputRef} />
    </Fragment>
  )
}
