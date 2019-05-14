import React, { MouseEvent } from 'react'
import { ListGroupItem } from 'reactstrap'

type Props = {
  text: string
  completed: boolean
  onClick(e: MouseEvent<HTMLElement>): void
  onClickRemoveTodo(e: MouseEvent<HTMLElement>): void
}

const Todo = ({ onClick, onClickRemoveTodo, completed, text }: Props) => (
  <ListGroupItem
    action
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={onClickRemoveTodo}>Delete</button>
  </ListGroupItem>
)

export default Todo
