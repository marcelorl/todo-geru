import { createAction } from 'deox'

export const addTodo = createAction(
  'ADD_TODO',
  resolve => (text: string) => resolve({ text })
)

export const setVisibilityFilter = createAction(
  'SET_VISIBILITY_FILTER',
  resolve => (filter: string) => resolve({ filter })
)

export const toggleTodo = createAction(
  'TOGGLE_TODO',
  resolve => (id: number) => resolve({ id })
)
