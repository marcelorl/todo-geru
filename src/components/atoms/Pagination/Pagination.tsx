import React, { MouseEvent } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

type PropsType = {
  onClickPagination(page: number): void
  page: number
  todosLength: number
}

const PaginationWrapper = ({ onClickPagination, page, todosLength }: PropsType) => {
  if (todosLength > 10) return null

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
      <PaginationItem disabled={page >= Math.floor(todosLength / 10)}>
        <PaginationLink
          className='px-3'
          next
          href='#'
          onClick={onClickPaginationNext} />
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationWrapper
