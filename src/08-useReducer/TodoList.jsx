import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [] }) => {
  return (
    <ul>
      {
        todos.map(({ id, description, done }) => (
          <TodoItem key={id} description={description} done={done} />
        ))
      }
    </ul>
  )
}