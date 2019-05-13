import React, { ChangeEvent, FormEvent, useState } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addTodo
    },
    dispatch
  )

type AppInnerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const AddTodo = (props: AppInnerProps) => {
  const [ todo, setTodo ] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!todo.trim()) return

    props.addTodo(todo)

    setTodo('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={todo} onChange={onChange} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
