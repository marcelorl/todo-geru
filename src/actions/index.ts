import { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { createAction } from 'deox'

import axios from '../services/request'

type Todo = {
  id: number
  text: string
}

export const addTodo = createAction(
  'ADD_TODO',
  (resolve: Function) => (todo: Todo) => resolve(todo)
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

export const addTodoRequest = (todo: any) =>
  (dispatch: Dispatch) =>
    axios.post('todos', todo)
      .then(({ data }: AxiosResponse<Todo>) => dispatch(addTodo(data)))

export const removeTodoRequest = (id: number) =>
  (dispatch: Dispatch) =>
    axios.delete(`todos/${id}`)
      .then(() => dispatch(removeTodo(id)))
