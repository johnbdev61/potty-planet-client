require('dotenv').config()

const api = {
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
  TOKEN_KEY: 'potty-planet-client-auth-token',
}

export default api
