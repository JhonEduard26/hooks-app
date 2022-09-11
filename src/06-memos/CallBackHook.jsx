import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10)

  const increment = useCallback(
    (value) => {
      setCounter(c => c + value)
    },
    [],
  )

  return (
    <>
      <h1>CallBackHook: counter {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  )
}