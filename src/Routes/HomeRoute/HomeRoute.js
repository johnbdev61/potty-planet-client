import React, { Component } from 'react'
import Token from '../../Services/token-service'
import config from '../../config'
import PostListContext from '../../Context/PostListContext'
import PostApiService from '../../Services/post-api-service'
import PostListItem from '../../Components/PostListItem/PostListItem'

export default class HomeRoute extends Component {
  static contextType = PostListContext

  componentDidMount() {
    this.context.clearError()
    PostApiService.getPosts()
      .then(this.context.setPostList)
      .then(this.context.setError)
  }

  renderPosts() {
    const { postList = [] } = this.context
    console.log('POST LIST', this.context.postList)
    return postList.map(post =>
      <PostListItem
        key={post.id}
        post={post}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <div>
        <h2>Home Page</h2>
        <section>
          {error
            ? <p>There was an error, try again</p>
            : this.renderPosts()
          }
        </section>
      </div>
    )
  }
}
