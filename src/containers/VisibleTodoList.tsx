import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { toggleTodo } from '../actions'
import TodoList from '../components/molecules/TodoList'
import { getVisibleTodos } from '../selectors'

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state)
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
