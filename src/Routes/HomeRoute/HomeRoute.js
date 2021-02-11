import React, { Component } from 'react'
import Token from '../../Services/token-service'
import config from '../../config'
import PostContext from '../../Context/PostListContext'
import PostApiService from '../../Services/post-api-service'
import PostListItem from '../../Components/PostListItem/PostListItem'
import './HomeRoute.css'

export default class HomeRoute extends Component {
  static contextType = PostContext

  componentDidMount() {
    this.context.clearError()
    PostApiService.getPosts()
      .then(this.context.setPostList)
      .then(this.context.setError)
  }

  renderPosts() {
    const { postList = [] } = this.context
    console.log('POST LIST', this.context.postList)
    return postList.filter((post) => !post.is_resolved).map(post =>
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
        <h2 className='post-title'>Training Posts</h2>
        <section>
          {error ? <p>There are no posts!</p> : this.renderPosts()}
        </section>
      </div>
    )
  }
}
