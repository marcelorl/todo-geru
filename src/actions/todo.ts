import { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { createAction } from 'deox'

import axios from '../services/request'
import { TodoType } from '../models'

export const addTodo = createAction(
  '[TODO] ADD',
  (resolve: Function) => (todo: Partial<TodoType>) => resolve(todo)
)

export const editTodo = createAction(
  '[TODO] EDIT',
  (resolve: Function) => (todo: Partial<TodoType>) => resolve(todo)
)

export const removeTodo = createAction(
  '[TODO] REMOVE',
  (resolve: Function) => (id: number) => resolve({ id })
)

export const fetchTodos = createAction(
  '[TODO] FETCH',
  (resolve: Function) => (todos: TodoType[]) => resolve(todos)
)

export const setVisibilityFilter = createAction(
  '[TODO] SET_VISIBILITY_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const setKeywordSearchFilter = createAction(
  '[TODO] SET_KEYWORD_SEARCH_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const setPaginationFilter = createAction(
  '[TODO] SET_PAGINATION_FILTER',
  (resolve: Function) => (filter: number) => resolve({ filter })
)

export const setDaysFilter = createAction(
  '[TODO] SET_DAYS_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const toggleTodo = createAction(
  '[TODO] TOGGLE',
  (resolve: Function) => (id: number) => resolve({ id })
)

export const globalError = createAction('[GLOBAL] ERROR')

export const addTodoRequest = (todo: Partial<TodoType>) => {
  todo.reminderSent = false
  todo.completed = false
  todo.createdAt = new Date()

  return (dispatch: Dispatch) =>
    axios.post('todos', todo)
      .then(({ data }: AxiosResponse<TodoType>) => dispatch(addTodo(data)))
      .catch(() => dispatch(globalError()))
}

export const editTodoRequest = (todo: TodoType) =>
  (dispatch: Dispatch) =>
    axios.put(`todos/${todo.id}`, todo)
      .then(({ data }: AxiosResponse<TodoType>) => dispatch(editTodo(data)))
      .catch(() => dispatch(globalError()))

export const fetchTodosRequest = () =>
  (dispatch: Dispatch) =>
    axios.get('todos')
      .then(({ data }: AxiosResponse<TodoType[]>) => dispatch(fetchTodos(data)))
      .catch(() => dispatch(globalError()))

export const removeTodoRequest = (id: number) =>
  (dispatch: Dispatch) =>
    axios.delete(`todos/${id}`)
      .then(() => dispatch(removeTodo(id)))
      .catch(() => dispatch(globalError()))

export const toggleTodoRequest = (todo: TodoType) => {
  const data = {
    completed: !todo.completed
  }

  return (dispatch: Dispatch) =>
    axios.patch(`todos/${todo.id}`, data)
      .then(() => dispatch(toggleTodo(todo.id)))
      .catch(() => dispatch(globalError()))
}
