import React, { ChangeEvent, FormEvent, useState } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

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
    <Form onSubmit={onSubmit}>
      <Row>
        <Col sm='12' lg='3'>
          <FormGroup>
            <Input name='todo' id='todo' placeholder='add a todo' value={todo} onChange={onChange} />
          </FormGroup>
        </Col>
        <Col sm='12' lg='3'>
          <Button
            color='primary'
            type='submit'>
            Add Todo
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
