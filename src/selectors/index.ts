import { createSelector } from 'reselect'

import { TodoType } from 'models'
import { filterByDate } from 'services/helpers'

export const getDaysFilter = ({ filters }: any) => filters.daysFilter
export const getKeywordSearchFilter = ({ filters }: any) => filters.keywordSearchFilter
export const getPageFilter = ({ filters }: any) => filters.pageFilter
export const getVisibilityFilter = ({ filters }: any) => filters.visibilityFilter
export const getTodos = (state: any) => state.todos

export const getVisibleTodos = createSelector(
  [ getDaysFilter, getKeywordSearchFilter, getPageFilter, getVisibilityFilter, getTodos ],
  (daysFilter, keywordSearch, page, visibilityFilter, todos) => {
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

    const filteredListByDays = filterByDate(filteredList, daysFilter)

    const filteredListByKeywordSearch = filteredListByDays.filter((todo: TodoType) =>
      new RegExp(keywordSearch, 'gi').test(todo.text)
    )

    return filteredListByKeywordSearch.slice(page * 10, (page + 1) * 10)
  }
)
