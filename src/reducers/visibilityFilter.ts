import { VisibilityFilters } from '../actions'

type stateProps = string

type actionProps = {
  type: string
  filter: string
}

const visibilityFilter = (state: stateProps = VisibilityFilters.SHOW_ALL, action: actionProps) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
