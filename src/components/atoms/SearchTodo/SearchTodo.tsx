import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

type PropsType = {
  onClickFilterByKeyword(keywordSearch: string): void
}

const SearchTodo = ({ onClickFilterByKeyword }: PropsType) => {
  const [ keywordSearch, setKeywordSearch ] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywordSearch(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onClickFilterByKeyword(keywordSearch)
  }

  return (
    <Form onSubmit={onSubmit} autoComplete='off'>
      <Row>
        <Col xs='12' sm='9' lg='10'>
          <FormGroup>
            <Input
              name='keyword'
              placeholder='Ex. Take a shower, Help my mother, Finish GERU test'
              onChange={onChange}
              value={keywordSearch} />
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
