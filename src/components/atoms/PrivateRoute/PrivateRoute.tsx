import React from 'react'
import { Route, Redirect } from 'react-router-dom'

type PropTypes = {
  component: any
  isAuthenticated: boolean
  path: string
  exact: boolean
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }: Partial<PropTypes>) => {
  return (
    <Route
      {...rest}
      render={props =>
        // isAuthenticated ? (
          <Component {...props} />
        // ) : (
        //   <Redirect to={{ pathname: '/login' }} />
        // )
      }
    />
  );
}

export default PrivateRoute
