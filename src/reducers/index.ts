import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import filters from './filters'
import todos from './todos'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  filters,
  todos
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
