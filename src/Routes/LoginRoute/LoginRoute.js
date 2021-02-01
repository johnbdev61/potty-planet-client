import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'

export default class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }
  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <LoginForm 
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}
