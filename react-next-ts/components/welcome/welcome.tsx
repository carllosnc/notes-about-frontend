import React from 'react'
import style from './welcome.module.scss'

export function Welcome(){
  return (
    <div data-testid="welcome" className={style.welcome}>
      <h1 data-testid="title" className={style.title}> CN Next starter </h1>
      <p data-testid="description" className={style.description}> description </p>
      <span data-testid="version"> { process.env.NEXT_PUBLIC_VERSION } </span>
    </div>
  )
}
