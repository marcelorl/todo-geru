import React, { Fragment, useState } from 'react'
import { Button, Navbar, NavbarBrand } from 'reactstrap'

// import SaveTodo from '../../atoms/SaveTodo'
import AddTodo from '../../../containers/AddTodo'

const Header = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const onClickToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Fragment>
      <Navbar color="light" light className='mt-2 mb-4'>
        <NavbarBrand href="/">
          <h1>Todo GERU</h1>
        </NavbarBrand>
        <Button color='success' onClick={onClickToggleModal}>Adicionar Tarefa</Button>
      </Navbar>
      <AddTodo isOpen={isModalOpen} onClickToggleModal={onClickToggleModal} />
    </Fragment>
  )
}

export default Header
