import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {

  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>Counter:
        <Small value={counter} />
      </h1>
      <hr />

      <button onClick={increment}>+</button>

      <button onClick={() => { setShow(s => !s) }}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}