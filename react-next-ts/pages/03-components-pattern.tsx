import { Page } from '../templates'
import Head from 'next/head'
import React from 'react'

// basic functional components
function title(){
  return (
    <h1> Basic functional comonent </h1>
  )
}

// props
type GreetingProps =  {
  name: string
}

function Greeting({ name }: GreetingProps){
  return (
    <p> hi {} </p>
  )
}

// default props
type LoginMsgProps = {
  name?: string
}

function LoginMsg( { name = "Guest"}: LoginMsgProps ){
  return (
    <p> Logged in as { name } </p>
  )
}

// children
type CardProps = {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps){
  return (
    <section className="cards">
      <h1> {title} </h1>
      {children}
    </section>
  )
}

// withChildren helper type
type WithChildren<T = {}> = T & { children?: React.ReactNode }
type BoardProps = WithChildren<{ title: string }>

// spread attributes to HTML elements
type ButtonProps = JSX.IntrinsicElements['button'];
function Button({ ...allProps }: ButtonProps) {
  return <button {...allProps} />
}

// preset attributes
type MyButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'>

function MyButton({...allProps}: MyButtonProps){
  return <button type="button" {...allProps} />
}

// styled components
type StyledButtonProps = Omit<JSX.IntrinsicElements['button'], 'type' | 'className'> & { type: 'primary' | 'secondary' }

function StyledButton({ type, ...allProps}: StyledButtonProps){
  return <button className={`btn-${type}`} />
}

export default function Home(){
  return (
    <Page>
      <Head>
        <title> Learning React </title>
      </Head>

      <h1> Learning react </h1>
    </Page>
  )
}
