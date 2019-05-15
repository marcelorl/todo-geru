import { createReducer } from 'deox'

import {
  addTodo,
  editTodo,
  fetchTodos,
  removeTodo,
  toggleTodo
} from '../actions'
import { TodoType } from '../models'

export const INITIAL_STATE: Partial<TodoType>[] = []

const reducer = createReducer(INITIAL_STATE,
  handle => [
  handle(addTodo, (state: any, { payload }: any) =>
    [
      ...state,
      payload
    ]
  ),
  handle(editTodo, (state: any, { payload }: any) =>
    state.map((todo: any) =>
      (todo.id === payload.id)
        ? payload
        : todo
    )
  ),
  handle(fetchTodos, (_, { payload }) => payload),
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
