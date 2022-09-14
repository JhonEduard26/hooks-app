import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('pruebas en el reducer', () => {

  const initialState = [{
    id: 1,
    description: 'demo todo',
    done: false
  }]

  test('debe de retornar el estado inicial', () => {

    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('debe de agregar un todo', () => {
    const newState = todoReducer(initialState,
      {
        type: '[TODO] add todo',
        payload: { id: 2, description: 'nuevo todo', done: false },
      }
    )

    expect(newState.length).toBe(2)
  })

  test('debe de eliminar un todo', () => {
    const newState = todoReducer(initialState, {
      type: '[TODO] delete a todo',
      payload: 1,
    })

    expect(newState.length).toBe(0)
  })

  test('debe de realizar el toggle de un todo', () => {
    const newState = todoReducer(initialState, {
      type: '[TODO] toggle todo',
      payload: 1,
    })

    expect(newState[0].done).toBeTruthy()
  })
})