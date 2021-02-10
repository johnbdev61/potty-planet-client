import config from './../config'
import TokenService from './token-service'

const ChatApiService = {
  getChats() {
    return fetch(`${config.API_ENDPOINT}/chats`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  getChat(chatId) {
    return fetch(`${config.API_ENDPOINT}/chats/${chatId}`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  addChat(newChat) {
    return fetch(`${config.API_ENDPOINT}/chats`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken}`,
      },
      body: JSON.stringify(newChat),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  deleteChat(chatId) {
    return fetch(`${config.API_ENDPOINT}/chats/${chatId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
  }
}