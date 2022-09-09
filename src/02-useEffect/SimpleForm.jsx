import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formValues, setFormValues] = useState({
    username: 'jhon',
    email: 'jhon@mail.com'
  })

  const { username, email } = formValues

  const onInputChange = ({ target }) => {

    const { name, value } = target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  useEffect(() => {
    // console.log('Me montó el componente')
  }, [])

  useEffect(() => {
    // console.log('formValues cambió')
  }, [formValues])

  useEffect(() => {
    // console.log('email cambió')
  }, [email])

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        placeholder="jhon@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        username === 'jhon2' && <Message />
      }
    </>
  )
}