import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import TodoList from '../components/molecules/TodoList'
import { getVisibleTodos } from '../selectors'
import { fetchTodosRequest, removeTodoRequest, toggleTodoRequest } from '../actions'
import { TodoType } from '../models'

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onClickRemoveTodo: (id: number) => removeTodoRequest(id),
      onClickToggleVisibility: (todo: TodoType) => toggleTodoRequest(todo),
      onLoadFetchTodos: () => fetchTodosRequest()
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
