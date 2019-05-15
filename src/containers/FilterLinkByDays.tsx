import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { setDaysFilter } from '../actions'
import Link from '../components/atoms/Link'

type PropsType = {
  filter: string
}

const mapStateToProps = (state: any, ownProps: PropsType) => ({
  active: ownProps.filter === state.filters.daysFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: PropsType) =>
  bindActionCreators(
    {
      onClickFilter: () => setDaysFilter(ownProps.filter)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
