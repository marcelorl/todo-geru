import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import TodoList from '../components/molecules/TodoList'
import { getVisibleTodos } from '../selectors'
import { removeTodoRequest, toggleTodo } from '../actions'

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onClickRemoveTodo: (id: number) => removeTodoRequest(id),
      toggleTodo: (id: number) => toggleTodo(id)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
