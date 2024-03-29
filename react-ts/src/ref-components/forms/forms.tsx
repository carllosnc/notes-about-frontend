import { useEffect, useRef } from 'react'
import JustValidate, { Rules } from 'just-validate'

function isRequired(field: string) {
  return {
    rule: 'required' as Rules,
    errorMessage: `O ${field} é obrigatório`,
  }
}

function validateForm() {
  let validator = new JustValidate('#form', {
    validateBeforeSubmitting: true,
    errorLabelCssClass: ['text-red-500', 'text-sm', 'p-2', 'bg-red-100'],
  })

  validator.addField('#name', [isRequired('nome')])
  validator.addField('#lastname', [isRequired('sobrenome')])
  validator.addField('#select', [isRequired('select')])

  validator.onSuccess(() => {
    alert('Form submitted')
  })
}

export function Forms() {
  useEffect(() => {
    validateForm()
  }, [])

  return (
    <form
      id="form"
      className="border w-[300px] border-black p-4 flex flex-col gap-4 justify-center items-center"
    >
      <div className="border border-red-500 p-4">
        <input
          id="name"
          readOnly
          value="hello world!"
          className="border border-neutral-500 p-4 rounded"
          placeholder="enter your name"
        />
      </div>

      <div className="border border-red-500 p-4">
        <input
          id="lastname"
          className="border border-neutral-500 p-4 rounded"
          placeholder="enter your name"
        />
      </div>

      <div className="border border-red-500 p-4 w-full">
        <select
          id="select"
          className="border border-neutral-500 p-4 rounded w-full"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>

      <button type="submit" className="bg-black text-white p-4 rounded">
        Submit
      </button>
    </form>
  )
}
