//-------------------------------------------
// Example 01: extend a button
//-------------------------------------------

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export function ExtendComp01({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

//-------------------------------------------
// Example 02: extend a input
//-------------------------------------------

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function ExtendComp02({ label, ...props }: InputProps) {
  return (
    <div>
      <label> {label} </label>
      <input {...props} type="text" />
    </div>
  )
}

//-------------------------------------------
// Example 03: extend form
//-------------------------------------------

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function ExtendComp03({ ...props }: FormProps) {
  return (
    <form {...props} action="">
      <span> form </span>
    </form>
  )
}

//-------------------------------------------
// Example 04: extend a div
//-------------------------------------------

interface DivProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ExtendComp04({ ...props }: DivProps){
  return (
    <div {...props}>
      <span> div </span>
    </div>
  )
}
