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
              aria-label='search-todo'
              name='keyword'
              placeholder='Ex. Tomar banho, Ajudar minha mãe, Terminar o Teste da GERU'
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
              Procurar
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchTodo
