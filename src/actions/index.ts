import { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { createAction } from 'deox'

import axios from '../services/request'
import { TodoType } from '../models'

export const addTodo = createAction(
  'ADD_TODO',
  (resolve: Function) => (todo: Partial<TodoType>) => resolve(todo)
)

export const removeTodo = createAction(
  'REMOVE_TODO',
  (resolve: Function) => (id: number) => resolve({ id })
)

export const setVisibilityFilter = createAction(
  'SET_VISIBILITY_FILTER',
  (resolve: Function) => (filter: string) => resolve({ filter })
)

export const toggleTodo = createAction(
  'TOGGLE_TODO',
  (resolve: Function) => (id: number) => resolve({ id })
)

export const addTodoRequest = (todo: Partial<TodoType>) => {
  todo.completed = false

  return (dispatch: Dispatch) =>
    axios.post('todos', todo)
      .then(({ data }: AxiosResponse<TodoType>) => dispatch(addTodo(data)))
}

export const removeTodoRequest = (id: number) =>
  (dispatch: Dispatch) =>
    axios.delete(`todos/${id}`)
      .then(() => dispatch(removeTodo(id)))

export const toggleTodoRequest = (todo: TodoType) => {
  const data = {
    completed: !todo.completed
  }

  return (dispatch: Dispatch) =>
    axios.patch(`todos/${todo.id}`, data)
      .then(() => dispatch(toggleTodo(todo.id)))
}
