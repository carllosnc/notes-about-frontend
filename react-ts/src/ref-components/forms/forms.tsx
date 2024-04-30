import { useEffect } from 'react'
import JustValidate, { Rules } from 'just-validate'

function isRequired(field: string) {
  return {
    rule: 'required' as Rules,
    errorMessage: `The ${field} field is required`,
  }
}

function validateForm() {
  let validator = new JustValidate('#form', {
    validateBeforeSubmitting: true,
    errorLabelCssClass: ['text-red-400', 'text-sm', 'py-2'],
  })

  validator.addField('#name', [isRequired('name')])
  validator.addField('#password', [isRequired('password')])
  validator.addField('#role', [isRequired('role')])

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
      className="border w-[300px] border-neutral-300 rounded-md p-4 flex flex-col gap-4 justify-center items-center"
    >
      <label>
        <small className="text-black">Name</small>
        <input
          id="name"
          className="border border-neutral-300 px-4 py-2 rounded w-full"
          placeholder="enter your name"
        />
      </label>

      <label>
        <small className="text-black">Password</small>
        <input
          id="password"
          type="password"
          className="border border-neutral-300 px-4 py-2 rounded w-full"
          placeholder="•••••••••••••"
        />
      </label>

      <label className="w-full">
        <small className="text-black">Role</small>
        <select
          id="role"
          className="border border-neutral-300 px-4 py-2 rounded w-full"
        >
          <option value="">Select an option</option>
          <option value="1">Administrator</option>
          <option value="2">Moderator</option>
          <option value="3">User</option>
        </select>
      </label>

      <button
        type="submit"
        className="bg-black text-white rounded-full px-4 py-2 w-full"
      >
        Submit
      </button>
    </form>
  )
}
