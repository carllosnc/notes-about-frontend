import { useEffect, useState } from 'react'

export function ConditionalHook({ condition }: { condition: boolean }) {
  if (condition) {
    return <h1> Hello world! </h1>
  }

  useEffect(() => {
    console.log('hello world!')
  })

  const [value, setValue] = useState<number>(0)

  return <div>{value}</div>
}
