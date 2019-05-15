import { createSelector } from 'reselect'

import { TodoType } from '../models'

const getVisibilityFilter = (state: any) => state.filters.visibilityFilter
const getKeywordSearchFilter = (state: any) => state.filters.keywordSearchFilter
const getTodos = (state: any) => state.todos

export const getVisibleTodos = createSelector(
  [ getKeywordSearchFilter, getVisibilityFilter, getTodos ],
  (keywordSearch, visibilityFilter, todos) => {
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

    return filteredList.filter((todo: TodoType) => todo.text.search(keywordSearch) > -1)
  }
)
