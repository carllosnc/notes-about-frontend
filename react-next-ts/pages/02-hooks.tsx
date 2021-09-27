import { Page } from '../templates'
import Head from 'next/head'
import React, { useState, useEffect, useLayoutEffect } from 'react'

const State = () => {
  const [count, setCount] = useState<number>(0)

  function increment(){
    setCount(c => c + 1)
  }

  return (
    <div>
      <h1> { count } </h1>
      <button onClick={increment}> increment </button>
    </div>
  )
}

const Effect = () => {
  useEffect(() => {
    console.log('onInit')
  })

  return (
    <div>
      <span> Use effect </span>
    </div>
  )
}

const LayoutEffect = () => {
  useLayoutEffect(() => {
    console.log('onInit')
  })

  return (
    <div>
      <span> Use layout effect </span>
    </div>
  )
}

export default function Hooks(){
  return (
    <Page>
      <Head>
        <title> Learning React </title>
      </Head>

      <State />
      <Effect />
      <LayoutEffect />
    </Page>
  )
}
