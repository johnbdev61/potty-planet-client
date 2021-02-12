import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import './LoginRoute.css'

export default class LoginRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }
  handleLoginSuccess = () => {
    const { history } = this.props
    console.log('IN HANDLE SUBMIT', this.props)
    history.push('/home')
  }

  render() {
    return (
      <div>
        <h2 className='login-title'>Login</h2>
        <LoginForm 
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}
