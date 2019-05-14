import React from 'react'
import { ListGroup} from 'reactstrap'

import Todo from '../../atoms/Todo'

type Props = {
  todos: todos[]
  toggleTodo(id: number): void
  onClickRemoveTodo(id: number): void
}

type todos = {
  id: number
  completed: boolean
  text: string
}

const TodoList = ({ onClickRemoveTodo, todos, toggleTodo }: Props) => {
  if (!todos.length) return <div className='mt-4 mb-5'>No results</div>

  return (
    <ListGroup className='my-3'>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          onClick={() => toggleTodo(todo.id)}
          onClickRemoveTodo={() => onClickRemoveTodo(todo.id)}
        />
      )}
    </ListGroup>
  )
}

export default TodoList
