import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Context from '../../Context/Context'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={(componentProps) => (
        <Context.Consumer>
          {(context) =>
            !!context.user.id ? (
              <Redirect to={'/'} />
            ) : (
              <Component {...componentProps} />
            )
          }
        </Context.Consumer>
      )}
    />
  )
}
