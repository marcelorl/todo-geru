import React from 'react'
import Todo from './Todo'

type Props = {
  todos: todos[]
  toggleTodo(id: number): void
}

type todos = {
  id: number
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
