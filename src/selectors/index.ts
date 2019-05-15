import { createSelector } from 'reselect'

import { TodoType } from '../models'

export const getDaysFilter = ({ filters }: any) => filters.daysFilter
export const getKeywordSearchFilter = ({ filters }: any) => filters.keywordSearchFilter
export const getPageFilter = ({ filters }: any) => filters.pageFilter
export const getVisibilityFilter = ({ filters }: any) => filters.visibilityFilter
export const getTodos = (state: any) => state.todos

const getDate = (date: Date) => `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

export const getVisibleTodos = createSelector(
  [ getDaysFilter, getKeywordSearchFilter, getPageFilter, getVisibilityFilter, getTodos ],
  (days, keywordSearch, page, visibilityFilter, todos) => {
    let filteredList = []
    let filteredListByDays = []

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

    switch (days) {
      case 'SHOW_ALL':
        filteredListByDays = filteredList
        break
      case 'TODAY':
        filteredListByDays = filteredList.filter((todo: TodoType) => {
          const today = new Date()
          const dueDate = new Date(todo.dueDate)

          return getDate(today) === getDate(dueDate)
        })
        break
      case '7_DAYS_AGO':
        filteredListByDays = filteredList.filter((todo: TodoType) => {
          const dueDate = new Date(todo.dueDate)
          const weekAgo = new Date(todo.dueDate)
          weekAgo.setDate(weekAgo.getDate() - 7)

          return weekAgo < dueDate
        })
        break
      case '30_DAYS_AGO':
        filteredListByDays = filteredList.filter((todo: TodoType) => {
          const dueDate = new Date(todo.dueDate)
          const monthAgo = new Date()
          monthAgo.setDate(monthAgo.getDate() - 30)

          return monthAgo < dueDate
        })
    }

    const filteredListByKeywordSearch = filteredListByDays.filter((todo: TodoType) =>
      new RegExp(keywordSearch, 'gi').test(todo.text)
    )

    return filteredListByKeywordSearch.slice(page * 10, (page + 1) * 10)
  }
)
