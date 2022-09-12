import { useTodos } from '../hooks'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'

export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, onNewTodo, onToggleTodo, onDeleteTodo } = useTodos()

  return (
    <>
      <h1>TodoApp: {todosCount}, pending: {pendingTodosCount}</h1>
      <h3>useReducer</h3>
      <hr />

      <div>
        <h4>Agregar tarea</h4>
        <TodoAdd onNewTodo={onNewTodo} />
      </div>

      <div>
        <TodoList
          todos={todos}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      </div>

    </>
  )
}