export const todoReducer = (state = [], action) => {

  switch (action.type) {
    case '[TODO] add todo':
      return [...state, action.payload]
    case '[TODO] delete a todo':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}