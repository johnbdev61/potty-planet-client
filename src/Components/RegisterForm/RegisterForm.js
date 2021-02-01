import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import Button from '../Button/Button'
import AuthApiService from '../../Services/auth-api-service'

export default class RegisterForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }
  state = { error: null }
  firstInput = React.createRef()

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = event.target
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then(user => {
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
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
      <form onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p>{error}</p>}</div>
        <div className='center'>
          <div>
            <Label htmlFor='registration-username-input'>
              Username
              <Required />
            </Label>
            <br/>
            <Input 
              ref={this.firstInput}
              aria-label='registration-username-input'
              id='registration-name-input'
              name='username' required
            />
          </div>
          <div>
            <Label htmlFor='registration-password-input'>
              Password
              <Required />
            </Label>
            <br/>
            <Input
              id='registration-password-input'
              aria-label='registration-password-input'
              name='password'
              type='password'
              required
            />
          </div>
        </div>
        <p>
          <Button className='btn' type='submit'>Sign Up</Button><br/>
          <Link to='/login'>Already have an account?</Link>
        </p>
      </form>
    )
  }
}
