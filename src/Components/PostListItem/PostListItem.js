import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostListItem extends Component {
  render() {
    const { post } = this.props
    return (
      <div>
        <h3>
          <Link to={`/open-post/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        <p>Created by:</p>
        <p>{post.date_created}</p>
      </div>
    )
  }
}
