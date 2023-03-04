import { useAtom } from 'jotai'
import { textAtom } from './atoms'
import React from 'react'

const Input = () => {
  const [text, setText] = useAtom(textAtom)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value)

  return (
    <input
      className="border border-red-500 p-2"
      value={text}
      onChange={handleChange}
    />
  )
}

const Uppercase = () => {
  const [text] = useAtom(textAtom)

  return (
    <div>
      uppercase: <b>{(text as string).toUpperCase()}</b>
    </div>
  )
}

export function JotaiApp() {
  return (
    <div>
      <div className="border border-red-400 p-4">
        <Input />
        <Uppercase />
      </div>
    </div>
  )
}
