import jwtDecode from 'jwt-decode'
import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  parseJwt(jwt) {
    return jwtDecode(jwt)
  },
  parseAuthToken() {
    const authToken = TokenService.getAuthToken()
    if (authToken) return TokenService.parseJwt(authToken)
    else return undefined
  },
  getUserId() {
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split('.')[1]))
      } catch (e) {
        return null
      }
    }
    const user = parseJwt(window.localStorage[config.TOKEN_KEY])
    return user?.user_id
  },
}

export default TokenService
