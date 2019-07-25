import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PrivateRoute from 'components/atoms/PrivateRoute'
import AppTemplate from 'components/templates/App'
import Login from 'components/templates/Login'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" exact component={AppTemplate} />
    </Router>
  )
}

export default Routes
