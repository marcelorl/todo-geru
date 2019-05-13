import React, { MouseEvent } from 'react'

type Props = {
  text: string
  completed: boolean
  onClick(e: MouseEvent<HTMLElement>): void
}

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
