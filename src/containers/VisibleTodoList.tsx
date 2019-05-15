import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import TodoList from '../components/molecules/TodoList'
import { getPageFilter, getVisibleTodos } from '../selectors'
import { fetchTodosRequest, removeTodoRequest, setPaginationFilter, toggleTodoRequest } from '../actions'

const mapStateToProps = (state: any) => ({
  page: getPageFilter(state),
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onClickPagination: setPaginationFilter,
      onClickRemoveTodo: removeTodoRequest,
      onClickToggleVisibility: toggleTodoRequest,
      onLoadFetchTodos: fetchTodosRequest
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
