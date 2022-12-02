import { FunctionComponent } from 'react'

type Props = {
  title: string
  paragraph: string
}

//-------------------------------------------
// example 1
//-------------------------------------------

export function TypedComp1({ title, paragraph }: Props) {
  return (
    <div>
      <h1> {title} </h1>
      <p> {paragraph} </p>
    </div>
  )
}

//-------------------------------------------
// example 2
//-------------------------------------------

export const TypedComp2: FunctionComponent<Props> = ({
  title,
  paragraph,
}: Props) => {
  return (
    <div>
      <h1> {title} </h1>
      <p> {paragraph} </p>
    </div>
  )
}
