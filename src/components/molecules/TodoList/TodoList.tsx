import React, { Fragment, MouseEvent, useEffect } from 'react'
import { ListGroup, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import Todo from '../../atoms/Todo'
import { TodoType } from '../../../models'

type PropsType = {
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
  }: PropsType) => {
  const renderPagination = () => {
    if (todos.length > 10) return null

    const onClickPaginationPrevious = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      onClickPagination(page - 1)
    }

    const onClickPaginationNext = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()

      onClickPagination(page + 1)
    }

    return (
      <Pagination className='d-flex justify-content-center' aria-label="Page navigation example">
        <PaginationItem disabled={page < 1}>
          <PaginationLink
            className='px-3'
            previous
            href='#'
            onClick={onClickPaginationPrevious} />
        </PaginationItem>
        <PaginationItem disabled={page >= Math.floor(todos.length / 10)}>
          <PaginationLink
            className='px-3'
            next
            href='#'
            onClick={onClickPaginationNext} />
        </PaginationItem>
      </Pagination>
    )
  }

  useEffect(() => {
    if (!todos.length) onLoadFetchTodos()
  })

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

      {renderPagination()}
    </Fragment>
  )
}

export default TodoList
