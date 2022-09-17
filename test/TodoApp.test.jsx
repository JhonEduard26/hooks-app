import { render, screen } from '@testing-library/react'
import { TodoApp } from '../src/08-useReducer/TodoApp'
import { useTodos } from '../src/hooks/useTodos'

jest.mock('../src/hooks/useTodos')

describe('pruebas <TodoApp />', () => {

  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'todo #1', done: false }
    ],
    todosCount: 1,
    pendingTodosCount: 1,
    onNewTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
  })

  test('debe de mostrar el componente correctamente', () => {
    render(<TodoApp />)
    expect(screen.getByText('todo #1')).toBeTruthy()
  })
})