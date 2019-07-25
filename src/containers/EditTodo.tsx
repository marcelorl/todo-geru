import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { editTodoRequest } from 'actions'
import SaveTodo from 'components/atoms/SaveTodo'

const mapStateToProps = (state: any, ownProps: any) => ownProps

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onSubmitAddTodo: editTodoRequest
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(SaveTodo)
