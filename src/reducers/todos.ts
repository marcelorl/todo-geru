import { createReducer } from 'deox'

import {
  addTodo,
  removeTodo,
  toggleTodo
} from '../actions'

type Todo = {
  id?: string
  text?: string
  completed?: boolean
}

export const INITIAL_STATE: Todo[] = []

const reducer = createReducer(INITIAL_STATE,
  handle => [
  handle(addTodo, (state: any, { payload }: any) =>
    [
      ...state,
      {
        ...payload,
        completed: false
      }
    ]
  ),
  handle(toggleTodo, (state, { payload }) =>
    state.map((todo: any) =>
      (todo.id === payload.id)
        ? {...todo, completed: !todo.completed}
        : todo
    )
  ),
  handle(removeTodo, (state, { payload }) =>
    state.filter((todo: any) => todo.id !== payload.id)
  )
])

export default reducer
