import { createReducer } from 'deox'

import {
  setKeywordSearchFilter,
  setVisibilityFilter
} from '../actions'

type FiltersType = {
  keywordSearchFilter: string
  visibilityFilter: string
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const INITIAL_STATE: FiltersType = {
  keywordSearchFilter: '',
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

const reducer = createReducer(INITIAL_STATE, handle => [
  handle(setVisibilityFilter, (state: any, { payload }: any) => ({
    ...state,
    visibilityFilter: payload.filter
  })),
  handle(setKeywordSearchFilter, (state: any, { payload }: any) => ({
    ...state,
    keywordSearchFilter: payload.filter
  }))
])

export default reducer
