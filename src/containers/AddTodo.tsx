import React, { FormEvent, ReactNode } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

type Props = {
  dispatch: Function
}

const AddTodo = ({ dispatch }: Props) => {
  let input: any

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.value.trim()) return

    dispatch(addTodo(input.value))

    input.value = ''
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={(node: ReactNode) => input = node} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  )
}

export default connect()(AddTodo)
