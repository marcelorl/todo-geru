import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loginRequest } from 'actions'
import LoginForm from 'components/atoms/LoginForm'

const mapStateToProps = (state: any, ownProps: any) => ownProps

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLoadLoginPage: loginRequest
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
