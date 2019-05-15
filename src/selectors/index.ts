import { createSelector } from 'reselect'

import { TodoType } from '../models'

export const getKeywordSearchFilter = (state: any) => state.filters.keywordSearchFilter
export const getPageFilter = (state: any) => state.filters.pageFilter
export const getVisibilityFilter = (state: any) => state.filters.visibilityFilter
export const getTodos = (state: any) => state.todos

export const getVisibleTodos = createSelector(
  [ getKeywordSearchFilter, getPageFilter, getVisibilityFilter, getTodos ],
  (keywordSearch, page, visibilityFilter, todos) => {
    let filteredList = []

    switch (visibilityFilter) {
      case 'SHOW_ALL':
        filteredList = todos
        break
      case 'SHOW_COMPLETED':
        filteredList = todos.filter((todo: TodoType) => todo.completed)
        break
      case 'SHOW_ACTIVE':
        filteredList = todos.filter((todo: TodoType) => !todo.completed)
        break
    }

    const filteredListByKeywordSearch = filteredList.filter((todo: TodoType) =>
      new RegExp(keywordSearch, 'gi').test(todo.text)
    )

    return filteredListByKeywordSearch.slice(page * 10, (page + 1) * 10)
  }
)
