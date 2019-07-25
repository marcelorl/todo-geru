import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { setVisibilityFilter } from 'actions'
import Link from 'components/atoms/Link'

type PropTypes = {
  filter: string
}

const mapStateToProps = (state: any, ownProps: PropTypes) => ({
  active: ownProps.filter === state.filters.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: PropTypes) =>
  bindActionCreators(
    {
      onClickFilter: () => setVisibilityFilter(ownProps.filter)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
