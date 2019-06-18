import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import {
  initializeFirebase,
  requestNotificationPermission,
  setOnRefreshTokenListener } from './services/push-notification'

import './main.scss'
//import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/pages/App'
import store from './reducers'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()

initializeFirebase()
requestNotificationPermission()
setOnRefreshTokenListener()
