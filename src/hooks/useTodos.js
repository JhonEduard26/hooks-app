import { useReducer, useEffect } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const onNewTodo = (todo) => {
    dispatch({
      type: '[TODO] add todo',
      payload: todo,
    })
  }

  const onToggleTodo = (id) => {
    dispatch({
      type: '[TODO] toggle todo',
      payload: id
    })
  }

  const onDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] delete a todo',
      payload: id
    })
  }

  return {
    todos,
    onNewTodo,
    onToggleTodo,
    onDeleteTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}