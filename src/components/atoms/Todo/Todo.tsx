import React, { MouseEvent } from 'react'
import { ListGroupItem } from 'reactstrap'

type Props = {
  text: string
  completed: boolean
  onClick(e: MouseEvent<HTMLElement>): void
}

const Todo = ({ onClick, completed, text }: Props) => (
  <ListGroupItem
    action
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </ListGroupItem>
)

export default Todo
