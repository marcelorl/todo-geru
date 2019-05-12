import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

type Props = {
  dispatch: Function
}

const AddTodo = ({ dispatch }: Props) => {
  let input: any

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      <input ref={(node: ReactNode) => input = node} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  )
}

export default connect()(AddTodo)
