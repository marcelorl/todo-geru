import nanoid from 'nanoid'
import { createReducer } from 'deox'

import {
  addTodo,
  toggleTodo
} from '../actions'

type stateProps = {
  id?: string
  text?: string
  completed?: boolean
}

export const INITIAL_STATE: stateProps[] = []

const reducer = createReducer(INITIAL_STATE,
  handle => [
  handle(addTodo, (state: any, { payload }: any) =>
    [
      ...state,
      {
        id: nanoid(),
        text: payload.text,
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
  )
])

export default reducer
