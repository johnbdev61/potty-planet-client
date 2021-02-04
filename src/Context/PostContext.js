import React, { Component } from 'react'

const PostContext = React.createContext({
  post: {},
  posts: [],
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPost: () => {},
  addPost: () => {},
  clearPost: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default PostContext

export class PostProvider extends Component {
  state = {
    post: {},
    error: null,
  }

  setError = (error) => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setPost = (post) => {
    this.setState({ post })
  }

  addPost = (post) => {
    this.setPost([...this.state.posts, post])
  }

  clearPost = () => {
    this.setPost({})
    this.setComments([])
  }

  setComments = (comments) => {
    this.setState({ comments })
  }

  addComment = (comment) => {
    this.setComments([...this.state.comments, comment])
  }

  render() {
    const value = {
      post: this.state.post,
      posts: this.state.posts,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPost: this.setPost,
      addPost: this.addPost,
      clearPost: this.clearPost,
      setComments: this.setComments,
      addComment: this.addComment,
    }
    return (
      <PostContext.Provider value={value}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}
