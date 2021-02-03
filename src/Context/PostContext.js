import React, { Component } from 'react'

export const nullPost = {
  author: {},
  tags: [],
}

const PostContext = React.createContext({
  post: nullPost,
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
    Post: nullPost,
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
    this.setComments([...this.state.posts, post])
  }

  clearPost = () => {
    this.setPost(nullPost)
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
      <ArticleContext.Provider value={value}>
        {this.props.children}
      </ArticleContext.Provider>
    )
  }
}
