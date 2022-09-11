export const todoReducer = (state, action) => {

  switch (action.type) {
    case 'abc':
      throw new Error('todo: Implementar caso')
    default:
      return state
  }
}