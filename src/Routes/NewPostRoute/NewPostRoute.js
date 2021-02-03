import React, { Component } from 'react'
import PostForm from '../../Components/PostForm/PostForm'

export default class NewPostRoute extends Component {
  render() {
    return (
      <div>
        <h2>Create Post</h2>
        <PostForm />
      </div>
    )
  }
}
