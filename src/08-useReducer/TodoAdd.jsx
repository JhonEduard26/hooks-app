import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const [inputValue, handleInputChange, resetForm] = useForm({
    description: ''
  })

  const { description } = inputValue

  const onSubmitForm = (event) => {
    event.preventDefault()

    if (description.length <= 1) return

    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false
    })
    resetForm()
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder='Ingresa una tarea'
        name="description"
        value={description}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}