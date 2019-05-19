import { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { createAction } from 'deox'

import axios from '../services/request'
import { TodoType } from '../models'

export const addTodo = createAction(
  'ADD_TODO',
  (resolve: Function) => (todo: Partial<TodoType>) => resolve(todo)
)

export const editTodo = createAction(
  'EDIT_TODO',
  (resolve: Function) => (todo: Partial<TodoType>) => resolve(todo)
)

export const removeTodo = createAction(
  'REMOVE_TODO',
  (resolve: Function) => (id: number) => resolve({ id })
)

export const fetchTodos = createAction(
  'FETCH_TODO',
  (resolve: Function) => (todos: TodoType[]) => resolve(todos)
)

export const setVisibilityFilter = createAction(
  'SET_VISIBILITY_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const setKeywordSearchFilter = createAction(
  'SET_KEYWORD_SEARCH_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const setPaginationFilter = createAction(
  'SET_PAGINATION_FILTER',
  (resolve: Function) => (filter: number) => resolve({ filter })
)

export const setDaysFilter = createAction(
  'SET_DAYS_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const toggleTodo = createAction(
  'TOGGLE_TODO',
  (resolve: Function) => (id: number) => resolve({ id })
)

export const globalError = createAction('GLOBAL_ERROR')

export const addTodoRequest = (todo: Partial<TodoType>) => {
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
