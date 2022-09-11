import { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
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

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const onNewTodo = (todo) => {
    console.log(todo)
  }

  return (
    <>
      <h1>TodoApp</h1>
      <h3>useReducer</h3>
      <hr />

      <div>
        <h4>Agregar tarea</h4>
        <TodoAdd onNewTodo={onNewTodo} />
      </div>

      <div>
        <TodoList todos={todos} />
      </div>

    </>
  )
}