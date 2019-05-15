import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { addTodoRequest } from '../actions'
import SaveTodo from '../components/atoms/SaveTodo'

const mapStateToProps = (state: any, ownProps: any) => ownProps

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onSubmitAddTodo: addTodoRequest
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(SaveTodo)
