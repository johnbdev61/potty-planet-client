import React, { Component } from 'react'
import PostForm from '../../Components/PostForm/PostForm'
import './NewPostRoute.css'

export default class NewPostRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }
  handlePostSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <div>
        <h2 className='create-post'>Create Post</h2>
        <PostForm
          onPostSuccess={this.handlePostSuccess}
        />
      </div>
    )
  }
}
