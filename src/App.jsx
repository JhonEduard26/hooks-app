import { CounterApp } from './01-useState/CounterApp'
import { CounterWithHook } from './01-useState/CounterWithHook'
import { SimpleForm } from './02-useEffect/SimpleForm'

export const App = () => {
  return (
    <>
      <h1>HooksApp</h1>
      {/* <CounterApp /> */}
      {/* <CounterWithHook /> */}
      <SimpleForm />
    </>
  )
}