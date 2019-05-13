import { createReducer } from 'deox'

import {
  setVisibilityFilter
} from '../actions'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const INITIAL_STATE: string = VisibilityFilters.SHOW_ALL

const reducer = createReducer(INITIAL_STATE, handle => [
  handle(setVisibilityFilter, (state: any, { payload }: any) => payload.filter)
])

export default reducer
