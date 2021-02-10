import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Context from '../../Context/Context'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={(componentProps) => (
        <Context.Consumer>
          {(context) =>
            !!context.user.id ? (
              <Component {...componentProps} />
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: componentProps.location },
                }}
              />
            )
          }
        </Context.Consumer>
      )}
    />
  )
}
