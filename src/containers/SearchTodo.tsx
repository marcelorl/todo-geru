import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { setKeywordSearchFilter } from '../actions'
import SearchTodo from '../components/atoms/SearchTodo'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onClickFilterByKeyword: setKeywordSearchFilter
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTodo)
