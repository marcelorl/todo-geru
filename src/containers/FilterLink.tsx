import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { setVisibilityFilter } from '../actions'
import Link from '../components/atoms/Link'

const mapStateToProps = (state: any, ownProps: any) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) =>
  bindActionCreators(
    {
      onClickFilterByVisibility: () => setVisibilityFilter(ownProps.filter)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
