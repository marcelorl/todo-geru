import { createSelector } from 'reselect'

import { TodoType } from '../models'

const getVisibilityFilter = (state: any) => state.visibilityFilter
const getTodos = (state: any) => state.todos

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter((todo: TodoType) => todo.completed)
      case 'SHOW_ACTIVE':
        return todos.filter((todo: TodoType) => !todo.completed)
    }
  }
)
