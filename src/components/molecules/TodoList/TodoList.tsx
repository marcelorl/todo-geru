import React from 'react'
import { ListGroup} from 'reactstrap'

import Todo from '../../atoms/Todo'

type Props = {
  todos: todos[]
  toggleTodo(id: string): void
}

type todos = {
  id: string
  completed: boolean
  text: string
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ListGroup className='my-3'>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ListGroup>
)

export default TodoList
