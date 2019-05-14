import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/pages/App'
import store from './reducers'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)