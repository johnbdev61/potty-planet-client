import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostListItem extends Component {
  render() {
    return (
      <div>
        <h3>
          <Link to='post.id.route'>
            Title
          </Link>
        </h3>
        <p>Created by:</p>
        <p>Date Created:</p>
      </div>
    )
  }
}
