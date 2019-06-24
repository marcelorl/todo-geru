import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { loginRequest } from '../actions'
import UserDropdown from '../components/atoms/UserDropdown'

const mapStateToProps = (state: any, ownProps: any) => ownProps

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLogin: loginRequest
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown)
