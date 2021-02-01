import React, { Component } from 'react'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'

export default class RegisterRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <RegisterForm />
      </div>
    )
  }
}
