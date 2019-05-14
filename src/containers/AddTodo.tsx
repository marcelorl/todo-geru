import React, { ChangeEvent, FormEvent, useState } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

import { addTodoRequest } from '../actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onSubmitAddTodo: addTodoRequest
    },
    dispatch
  )

type PropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const AddTodo = (props: PropsType) => {
  const [ todo, setTodo ] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!todo.trim()) return

    props.onSubmitAddTodo({ text: todo })

    setTodo('')
  }

  return (
    <Form onSubmit={onSubmit} autoComplete='off'>
      <Row>
        <Col xs='12' sm='9' lg='10'>
          <FormGroup>
            <Input
              name='todo'
              id='todo'
              placeholder='Ex. Take a shower, Help my mother, Finish GERU test'
              value={todo}
              onChange={onChange} />
          </FormGroup>
        </Col>
        <Col xs='12' sm='3' lg='2'>
          <div className='d-flex justify-content-end'>
            <Button
              color='primary'
              type='submit'>
              Add Todo
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
