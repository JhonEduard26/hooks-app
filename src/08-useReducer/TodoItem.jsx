export const TodoItem = ({ id, description, done, handleDelete }) => {
  return (
    <li>
      <span>{description}</span>
      <button onClick={() => handleDelete(id)}>❎</button>
    </li>
  )
}