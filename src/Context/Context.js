import React, { Component } from 'react'
import TokenService from '../Services/token-service'

const Context = React.createContext({
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
})

export default Context

export class ContextProvider extends Component {
  constructor(props) {
    super(props)
    const state = { user: {}, error: null}
    const jwtPayload = TokenService.parseAuthToken()
    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        sub: jwtPayload.sub,
      }
    this.state = state
  }

  

  setError = error => {
    console.error(error)
    this.setState({ error })
  }
  clearError = () => {
    this.setState({ error: null })
  }
  setUser = user => {
    this.setState({ user })
  }
  processLogin = authToken => {
    TokenService.saveAuthToken(authToken)
    const jwtPayload = TokenService.parseAuthToken()
    this.setUser({
      id: jwtPayload.user_id,
      username: jwtPayload.sub,
    })
    console.log('PAYLOAD', jwtPayload)
  }
  processLogout = () => {
    TokenService.clearAuthToken()
    this.setUser({})
  }

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    }
    console.log(value)
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}