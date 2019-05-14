import React from 'react'
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

const SearchTodo = () => {
  return (
    <Form autoComplete='off'>
      <Row>
        <Col xs='12' sm='9' lg='10'>
          <FormGroup>
            <Input
              name='keyword'
              placeholder='Ex. Take a shower, Help my mother, Finish GERU test' />
          </FormGroup>
        </Col>
        <Col xs='12' sm='3' lg='2'>
          <div className='d-flex justify-content-end'>
            <Button
              className='w-100'
              color='primary'
              type='submit'>
              Search
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchTodo
