import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {

  const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
      <h1>CounterWithHook: {counter}</h1>
      <hr />

      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
    </>
  )
}