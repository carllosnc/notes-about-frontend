import React from 'react'

//-------------------------------------------
// type simple props
//-------------------------------------------

type TypedComp01Props = {
  children: string
}

export function TypedComp01({ children }: TypedComp01Props) {
  return (
    <div>
      <h1> {children} </h1>
    </div>
  )
}

//-------------------------------------------
// type children with ReactElement
//-------------------------------------------

type TypedComp02Props = {
  children: React.ReactElement
}

export function TypedComp03({ children }: TypedComp02Props) {
  return <div> {children} </div>
}

//-------------------------------------------
// type children with ReactNode
//-------------------------------------------

type TypedComp03Props = {
  children: React.ReactNode
}

export function TypedComp04({ children }: TypedComp03Props) {
  return <div> {children} </div>
}
