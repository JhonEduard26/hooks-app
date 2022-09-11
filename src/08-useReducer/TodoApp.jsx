import { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Correr 3 millas',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'Meditar 10 minutos',
    done: false,
  }
]

export const TodoApp = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
      <h1>TodoApp</h1>
      <h4>useReducer</h4>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}