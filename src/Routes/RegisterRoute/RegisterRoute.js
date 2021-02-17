import React, { Component } from 'react'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import './RegisterRoute.css'

export default class RegisterRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  onRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <div>
        <h2 className='register-title'>Register</h2>
        <RegisterForm onRegistrationSuccess={this.onRegistrationSuccess} />
      </div>
    )
  }
}
