import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PrivateRoute from 'components/atoms/PrivateRoute'
import App from 'components/pages/App'
import Login from 'components/pages/Login'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" exact component={App} />
    </Router>
  )
}

export default Routes
