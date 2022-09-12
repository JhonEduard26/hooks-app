import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul>
      {
        todos.map(({ id, description, done }) => (
          <TodoItem
            key={id}
            id={id}
            description={description}
            done={done}
            handleDelete={onDeleteTodo}
          />
        ))
      }
    </ul>
  )
}