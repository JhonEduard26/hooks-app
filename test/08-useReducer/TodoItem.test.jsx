import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('pruebas <TodoItem />', () => {

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  const id = 1

  beforeEach(() => jest.clearAllMocks())

  test('debe de mostrar el ToDo pendiente de completar', () => {
    render(<TodoItem />)

    const liElement = screen.getByRole('listitem')
  })

  test('debe de mostrar el ToDo completado', () => {
    render(<TodoItem
      description={'Hola'}
      done
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.classList).toContain('completed')
  })

  test('debe de llamar el onToggleTodo cuando se hace click', () => {
    render(<TodoItem
      id={id}
      description={'Hola'}
      done
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)

    const spanElement = screen.getByLabelText('span')
    fireEvent.click(spanElement)

    expect(onToggleTodoMock).toHaveBeenCalledWith(id)
  })

  test('debe de llamar el onDeleteTodo cuando se hace click', () => {
    render(<TodoItem
      id={id}
      description={'Hola'}
      done
      onToggleTodo={onToggleTodoMock}
      onDeleteTodo={onDeleteTodoMock}
    />)

    const btnElement = screen.getByRole('button')
    fireEvent.click(btnElement)

    expect(onDeleteTodoMock).toHaveBeenCalledWith(id)

  })
})