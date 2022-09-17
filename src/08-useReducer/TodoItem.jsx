export const TodoItem = ({ id, description, done, onDeleteTodo, onToggleTodo }) => {
  return (
    <li>
      <span
        className={`${done ? "completed" : ''} pointer`.trim()}
        aria-label="span"
        onClick={() => onToggleTodo(id)}
      >
        {description}
      </span>
      <button onClick={() => onDeleteTodo(id)}>❎</button>
    </li>
  )
}