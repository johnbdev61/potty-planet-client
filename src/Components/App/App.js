import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegisterRoute from '../../Routes/RegisterRoute/RegisterRoute'
import LoginRoute from '../../Routes/LoginRoute/LoginRoute'
import HomeRoute from '../../Routes/HomeRoute/HomeRoute'
import NewPostRoute from '../../Routes/NewPostRoute/NewPostRoute'
import ArchiveRoute from '../../Routes/ArchiveRoute/ArchiveRoute'
import MessagesRoute from '../../Routes/MessagesRoute/MessagesRoute'
import NotFoundRoute from '../../Routes/NotFoundRoute/NotFoundRoute'

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && <p>There was an error! Sorry!</p>}
          <Switch>
            <PrivateRoute exact path={'/'} component={HomeRoute} />
            <PrivateRoute path={'/post'} component={NewPostRoute} />
            <PrivateRoute path={'/archive'} component={ArchiveRoute} />
            <PrivateRoute path={'/messages'} component={MessagesRoute} />
            <PublicOnlyRoute path={'/register'} component={RegisterRoute} />
            <PublicOnlyRoute path={'/login'} component={LoginRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    )
  }
}

