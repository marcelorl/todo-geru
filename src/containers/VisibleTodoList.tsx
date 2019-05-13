import { connect } from 'react-redux'
import {bindActionCreators, Dispatch} from 'redux'

import { toggleTodo } from '../actions'
import TodoList from '../components/molecules/TodoList'
import { VisibilityFilters } from '../reducers/visibilityFilter'

const getVisibleTodos = (todos: any, filter: any) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: any) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: any) => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleTodo: (id: string) => toggleTodo(id)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
