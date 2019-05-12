type stateProps = {
  id?: number
  completed?: boolean
}[]

type actionProps = {
  id: number
  text: string
  type: string
}

const todos = (state: stateProps = [], action: actionProps) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
