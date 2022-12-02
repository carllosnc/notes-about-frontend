import { useEffect, useState } from 'react'

//-------------------------------------------
// type useState
//-------------------------------------------

export function TypedHooks() {
  // basic type
  const [count, setCount] = useState<number>(0)

  // literal types
  const [status, setStatus] = useState<'Finished' | 'Pendend' | 'Canceled'>(
    'Pendend'
  )

  // object
  const [person, setPerson] = useState<{ name: string; age: number }>({
    name: 'bob',
    age: 20,
  })

  // function
  const [action, setAction] = useState<(arg: string) => string>(
    (arg: string) => {
      return 'hello world!'
    }
  )

  useEffect(() => {
    setCount(10)
    setStatus('Finished')
    setPerson({ name: 'Maria', age: 22 })
    setAction(() => 'foo bar span')
  }, [])
}
