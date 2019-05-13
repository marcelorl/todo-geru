import React from 'react'
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
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
