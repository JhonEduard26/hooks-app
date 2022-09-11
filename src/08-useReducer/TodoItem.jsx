export const TodoItem = ({ description, done }) => {
  return (
    <li>
      <span>{description}</span>
      <button>❎</button>
    </li>
  )
}