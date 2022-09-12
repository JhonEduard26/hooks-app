import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <div>LoginPage</div>
      <button onClick={() => setUser({ id: 123, name: 'Jhon', age: 23 })}>
        Establecer usuario
      </button>
    </>
  )
}