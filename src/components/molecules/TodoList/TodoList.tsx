import React, { useEffect } from 'react'
import { ListGroup} from 'reactstrap'

import Todo from '../../atoms/Todo'
import { TodoType } from '../../../models'

type PropsType = {
  todos: TodoType[]
  onClickRemoveTodo(id: number): void
  onClickToggleVisibility(todo: TodoType): void
  onLoadFetchTodos(): void
}

const TodoList = ({ onClickRemoveTodo, onClickToggleVisibility, onLoadFetchTodos, todos }: PropsType) => {
  useEffect(() => {
    if (!todos.length) onLoadFetchTodos()
  })

  if (!todos.length) return <div className='mt-4 mb-5'>No results</div>

  return (
    <ListGroup className='my-3'>
      {todos.map((todo: TodoType) =>
        <Todo
          key={todo.id}
          todo={todo}
          onClickToggleVisibility={() => onClickToggleVisibility(todo)}
          onClickRemoveTodo={() => onClickRemoveTodo(todo.id)}
        />
      )}
    </ListGroup>
  )
}

export default TodoList
