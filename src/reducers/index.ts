import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { save, load } from 'redux-localstorage-simple'

import filters from './filters'
import notification from './notification'
import todos from './todos'

const loggerMiddleware = createLogger()

const reducers = combineReducers({
  filters,
  notification,
  todos
})

const middlewares = applyMiddleware(
  save({ states: ['notification'] }),
  thunkMiddleware,
  loggerMiddleware
)

const store =
  createStore(
    reducers,
    load({ states: ['notification'] }),
    composeWithDevTools(
      middlewares
    )
  )

export default store
