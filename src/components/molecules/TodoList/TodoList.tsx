import React, { Fragment, useEffect } from 'react'
import { ListGroup } from 'reactstrap'

import Todo from 'components/atoms/Todo'
import Pagination from 'components/atoms/Pagination'
import { TodoType } from 'models'

type PropTypes = {
  page: number
  todos: TodoType[]
  onClickPagination(page: number): void
  onClickRemoveTodo(id: number): void
  onClickToggleVisibility(todo: TodoType): void
  onLoadFetchTodos(): void
}

const TodoList = (
  {
    onClickPagination,
    onClickRemoveTodo,
    onClickToggleVisibility,
    onLoadFetchTodos,
    page,
    todos
  }: PropTypes) => {

  useEffect(() => {
    onLoadFetchTodos()
  }, [onLoadFetchTodos])

  if (!todos.length) return <div className='mt-4 mb-5'>No results</div>

  return (
    <Fragment>
      <ListGroup className='my-3'>
        {todos.map((todo: TodoType) =>
          <Todo
            key={todo.id}
            todo={todo}
            onClickToggleVisibility={() => onClickToggleVisibility(todo)}
            onClickRemoveTodo={() => onClickRemoveTodo(todo.id)}
          />
        )}
      </ListGroup>

      <Pagination
        page={page}
        todosLength={todos.length}
        onClickPagination={onClickPagination} />
    </Fragment>
  )
}

export default TodoList
