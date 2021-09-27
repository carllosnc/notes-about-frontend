import { Page } from '../templates'
import Head from 'next/head'
import React, { useEffect, useRef, useState, FunctionComponent } from 'react'

interface Comp1Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: string
}

// functional component using React.FC
const Comp1 = ({ children, ...props }: Comp1Props) => {
  function eventHandle(event: React.MouseEvent){
    console.log(event.clientX, event.clientY)
  }

  return (
    <button onClick={eventHandle} {...props}> {children} </button>
  )
}

// functional component using props
const Comp2 = ({ children }): JSX.Element => {
  return (
    <button>
      { children }
    </button>
  )
}

// function component with typed state
const Comp3 = ({ children }) => {
  type User = {
    name: string
    email: string
    address: string
  }

  const [state1, setState1] = useState<number>(1)
  const [state2, setState2] = useState<number | string | boolean>(null)
  const [state3, setState3] = useState<'loading' | 'success' | 'error'>('loading')
  const [state4, setState4] = useState<User>({} as User)
  const [state5, setState5] = useState<number[]>([1, 2, 3])
  const [state6, setState6] = useState<Array<number>>([1, 2, 3])

  return (
    <div> { children } </div>
  )
}

// form event
const Comp4 = ({ children }: { children: string }) => {
  function submitHandle(event: React.FormEvent){
    event.preventDefault()
    console.log(event.currentTarget[0].value)
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <h1> { children } </h1>
        <input type="text" />
        <button type="submit"> submit </button>
      </form>
    </div>
  )
}

// type reference
const Comp5 = () => {
  const divRef = useRef<HTMLDivElement>()

  useEffect(() => {
    console.log(divRef)
  })

  return (
    <div>
      <div ref={divRef}> UseRef </div>
    </div>
  )
}

// generic type
type Comp6Props = {
  title: string
  paragraph: string
}

const Comp6: FunctionComponent<Comp6Props> = ({ paragraph, title, children }) => {
  return (
    <div>
      <h1> { title } </h1>
      <p> { paragraph } </p>
      { children }
    </div>
  )
}

export default function TypedComponents(){
  return (
    <Page>
      <Head>
        <title> CN Next Starter </title>
      </Head>

      <Comp1> Component 1 </Comp1>
      <Comp2> Component 2 </Comp2>
      <Comp3> Component 3 </Comp3>
      <Comp4> Component 4 </Comp4>
      <Comp5 />
    </Page>
  )
}
