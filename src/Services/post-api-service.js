import TokenService from '../Services/token-service'
import config from '../config'

const PostApiService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  getPost(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  getPostComments(postId) {
    return fetch(`${config.API_ENDPOINT}/posts/${postId}/comments`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
  postComment(postId, comment) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        post_id: postId,
        comment: comment,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
}

export default PostApiService