type ControllerProps = {
  countRef: HTMLParagraphElement
  increment: HTMLButtonElement
  decrement: HTMLButtonElement
}

export function CounterController(args: ControllerProps) {
  const { countRef, increment, decrement } = args

  let count = 0

  countRef.textContent = count.toString()

  increment.onclick = () => {
    count++
    countRef.textContent = count.toString()

    if (count > 10) {
      countRef.classList.add('text-red-500')
      countRef.classList.add('rounded-full')
    }
  }

  decrement.onclick = () => {
    count--
    countRef.textContent = count.toString()
  }
}
