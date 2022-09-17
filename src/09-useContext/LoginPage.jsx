import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <div>LoginPage</div>

      <pre aria-label='pre'>
        {JSON.stringify(user, null, 2)}
      </pre>

      <button onClick={() => setUser({ id: 123, name: 'Jhon', age: 23 })}>
        Establecer usuario
      </button>
    </>
  )
}