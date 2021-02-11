import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import AuthApiService from '../../Services/auth-api-service'
import Context from '../../Context/Context'
import Button from '../Button/Button'
import './LoginForm.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }
  static contextType = Context
  state = { error: null }
  firstInput = React.createRef()

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = event.target
    console.log(event.target)
    this.setState({ error: null })
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
    .then(res => {
      username.value = ''
      password.value = ''
      console.log('AUTH')
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess({ username, password })
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form className='login-form' onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p>{error}</p>}</div>
        <div className='center-login'>
          <div>
            <Label className='login-label' htmlFor='login-username-input'>
              Username
            </Label>
            <br />
            <Input
              className='username-input'
              ref={this.firstInput}
              aria-label='login-username-input'
              id='login-username-input'
              name='username'
              required
            />
          </div>
          <div>
            <Label className='login-label' htmlFor='login-password-input'>
              Password
            </Label>
            <br />
            <Input
              id='login-password-input'
              aria-label='login-password-input'
              name='password'
              type='password'
              required
            />
          </div>
          <div className='login-btn'>
            <Button type='submit'>Login</Button>
          </div>
        </div>
      </form>
    )
  }
}
