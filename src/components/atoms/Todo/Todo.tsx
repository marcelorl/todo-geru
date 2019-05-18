import React, { MouseEvent, useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import dayjs from 'dayjs'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroupItem
} from 'reactstrap'

import './Todo.css'
import { TodoType } from '../../../models'
import EditTodo from "../../../containers/EditTodo";

type PropsType = {
  todo: TodoType
  onClickToggleVisibility(e: MouseEvent<HTMLElement>): void
  onClickRemoveTodo(e: MouseEvent<HTMLElement>): void
}

const Todo = ({ onClickToggleVisibility, onClickRemoveTodo, todo }: PropsType) => {
  const [ dropdownOpen, setDropdownOpen ] = useState(false)
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const onToggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const onClickToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const dueDate = new Date(todo.dueDate)
  const dueDateFormatted = dayjs(dueDate).format('DD/MM/YYYY HH:mm')

  return (
    <ListGroupItem
      action
      active={todo.completed}
    >
      <div className='d-flex justify-content-between'>
        <Button color='link' className='btn-todo d-flex align-items-center' onClick={onClickToggleVisibility}>{todo.text} | {dueDateFormatted}</Button>
        <Dropdown isOpen={dropdownOpen} toggle={onToggleDropdownOpen}>
          <DropdownToggle aria-label='options'>
            <FaEllipsisV />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Options</DropdownItem>
            <DropdownItem onClick={onClickToggleModal}>Edit</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem onClick={onClickRemoveTodo}>Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <EditTodo todo={todo} isOpen={isModalOpen} onClickToggleModal={onClickToggleModal} />
    </ListGroupItem>
  )
}

export default Todo
