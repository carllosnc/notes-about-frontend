import React from 'react'

//-------------------------------------------
// type events
//-------------------------------------------

export function TypedComp() {
  function clickHandle(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.clientX, event.clientY)
  }

  function changeHandle(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  function syntheticHandle(event: React.SyntheticEvent) {
    event.preventDefault()
  }

  return (
    <div>
      <button onClick={clickHandle}> Click me! </button>
      <input onChange={changeHandle} type="text" />
    </div>
  )
}
