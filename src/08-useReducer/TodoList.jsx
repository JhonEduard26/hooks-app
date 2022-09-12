import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul>
      {
        todos.map(({ id, description, done }) => (
          <TodoItem
            key={id}
            id={id}
            description={description}
            done={done}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))
      }
    </ul>
  )
}