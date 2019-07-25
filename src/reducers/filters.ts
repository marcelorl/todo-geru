import { createReducer } from 'deox'

import {
  setDaysFilter,
  setKeywordSearchFilter,
  setPaginationFilter,
  setVisibilityFilter
} from 'actions'

type FiltersType = {
  daysFilter: string
  keywordSearchFilter: string
  pageFilter: number
  visibilityFilter: string
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const DaysFilters = {
  SHOW_ALL: 'SHOW_ALL',
  TODAY: 'TODAY',
  '7_DAYS_AGO': '7_DAYS_AGO',
  '30_DAYS_AGO': '30_DAYS_AGO'
}

export const INITIAL_STATE: FiltersType = {
  daysFilter: DaysFilters.SHOW_ALL,
  keywordSearchFilter: '',
  pageFilter: 0,
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

const reducer = createReducer(INITIAL_STATE, handle => [
  handle(setDaysFilter, (state: any, { payload }: any) => ({
    ...state,
    daysFilter: payload.filter,
    pageFilter: 0
  })),
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
