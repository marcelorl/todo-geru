import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { registerNotificationIdRequest } from '../actions'
import InitializeNotification from '../components/atoms/InitializeNotification'

const mapStateToProps = (state: any) => ({
  notificationId: state.notification.id
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLoadRegisterNotificationId: registerNotificationIdRequest
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(InitializeNotification)
