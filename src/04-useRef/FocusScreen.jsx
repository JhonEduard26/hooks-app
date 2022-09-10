import { useRef } from "react"

export const FocusScreen = () => {
  const ref = useRef(null)

  const handleClick = () => {
    ref.current.select()
  }

  return (
    <>
      <h1>Focus screen</h1>
      <hr />

      <input type="text" ref={ref} />
      <button onClick={handleClick}>Set focus</button>
    </>
  )
}