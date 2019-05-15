import React from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Formik } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.min.css'

type PropsType = {
  isOpen: boolean
  onClickToggleModal(): void
  onSubmitAddTodo(todo: any): void
}

const SaveTodo = ({ isOpen, onClickToggleModal, onSubmitAddTodo }: PropsType) => {
  const onSubmit = (values: any) => {
    onSubmitAddTodo(values)
    onClickToggleModal()
  }

  return (
    <Modal autoFocus centered isOpen={isOpen} toggle={onClickToggleModal}>
      <ModalHeader toggle={onClickToggleModal}>Save Todo</ModalHeader>
      <Formik
        initialValues={{
          text: '',
          dueDate: new Date(),
          length: 0,
          reminder: 0
        }}
        onSubmit={onSubmit}
      >
        {props => {
          const {
            handleChange,
            handleSubmit,
            setFieldValue,
            values
          } = props

          return (
            <Form onSubmit={handleSubmit} autoComplete='off'>
              <ModalBody>
                <FormGroup>
                  <Label for='text'>Descrição</Label>
                  <Input id='text' name='text' onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex flex-column'>
                  <Label for='dueDate'>Data e hora que a tarefa acontecerá</Label>
                  <DatePicker
                    className='form-control'
                    dateFormat='dd/MM/yyyy HH:mm'
                    id='dueDate'
                    name='dueDate'
                    timeFormat='HH:mm'
                    showTimeSelect
                    selected={values.dueDate}
                    onChange={(date: any) => { setFieldValue('dueDate', date) }} />
                </FormGroup>
                <FormGroup>
                  <Label for='length'>Previsão para duração da tarefa (minutos)</Label>
                  <Input
                    id='length'
                    name='length'
                    type='number'
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='reminder'>Tempo para lembrete da tarefa (minutos)</Label>
                  <Input
                    id='reminder'
                    name='reminder'
                    type='number'
                    onChange={handleChange}
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button type='submit' color='primary'>Salvar</Button>{' '}
                <Button color='secondary' onClick={onClickToggleModal}>Cancel</Button>
              </ModalFooter>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

export default SaveTodo
