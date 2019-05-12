import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import todos from './todos'
import visibilityFilter from './visibilityFilter'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  todos,
  visibilityFilter
})

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)

const store =
  createStore(
    reducers,
    composeWithDevTools(
      middlewares
    )
  )

export default store
