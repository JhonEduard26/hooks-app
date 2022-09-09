import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  const [formValues, onInputChange, onResetForm] = useForm({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formValues

  return (
    <>
      <h1>Form With Custom hook</h1>
      <hr />

      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
        autoFocus
      />

      <input
        type="email"
        placeholder="jhon@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        placeholder="********"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}>Reset</button>
    </>
  )
}