import { createAction } from 'deox'

export const addTodo = createAction(
  'ADD_TODO',
  (resolve: Function) => (text: string) => resolve({ text })
)

export const setVisibilityFilter = createAction(
  'SET_VISIBILITY_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const toggleTodo = createAction(
  'TOGGLE_TODO',
  (resolve: Function) => (id: string) => resolve({ id })
)
