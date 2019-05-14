import React, { MouseEvent, useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ListGroupItem } from 'reactstrap'

import { TodoType } from '../../../models'

type PropsType = {
  todo: TodoType
  onClick(e: MouseEvent<HTMLElement>): void
  onClickRemoveTodo(e: MouseEvent<HTMLElement>): void
}

const Todo = ({ onClick, onClickRemoveTodo, todo }: PropsType) => {
  const [ dropdownOpen, setDropdownOpen ] = useState(false)

  const onToggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <ListGroupItem
      action
      active={todo.completed}
    >
      <div className='d-flex justify-content-between'>
        <div className='d-flex align-items-center' onClick={onClick}>{todo.text}</div>
        <Dropdown isOpen={dropdownOpen} toggle={onToggleDropdownOpen}>
          <DropdownToggle>
            <FaEllipsisV />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header>Options</DropdownItem>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem onClick={onClickRemoveTodo}>Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ListGroupItem>
  )
}

export default Todo
