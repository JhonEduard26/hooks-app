import { useState } from "react"

export const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  })

  const { counter1, counter2, counter3 } = state

  return (
    <>
      <h2>Counter1: {counter1}</h2>
      <h2>Counter2: {counter2}</h2>
      <h2>Counter3: {counter3}</h2>
      <h3>useState</h3>
      <hr />

      <button onClick={() => {
        setState({
          ...state,
          counter1: counter1 + 1,
          counter2: counter2 + 1,
          counter3: counter3 + 1,
        })
      }}>
        +1
      </button>
    </>
  )
}