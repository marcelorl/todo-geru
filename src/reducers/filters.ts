import { createReducer } from 'deox'

import {
  setKeywordSearchFilter,
  setPaginationFilter,
  setVisibilityFilter
} from '../actions'

type FiltersType = {
  keywordSearchFilter: string
  pageFilter: number
  visibilityFilter: string
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const INITIAL_STATE: FiltersType = {
  keywordSearchFilter: '',
  pageFilter: 0,
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

const reducer = createReducer(INITIAL_STATE, handle => [
  handle(setKeywordSearchFilter, (state: any, { payload }: any) => ({
    ...state,
    keywordSearchFilter: payload.filter,
    pageFilter: 0
  })),
  handle(setPaginationFilter, (state: any, { payload }: any) => ({
    ...state,
    pageFilter: payload.filter
  })),
  handle(setVisibilityFilter, (state: any, { payload }: any) => ({
    ...state,
    pageFilter: 0,
    visibilityFilter: payload.filter
  }))
])

export default reducer
