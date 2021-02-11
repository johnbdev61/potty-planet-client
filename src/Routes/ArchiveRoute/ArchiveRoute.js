import React, { Component } from 'react'
import PostListContext from '../../Context/PostListContext'
import PostApiService from '../../Services/post-api-service'
import PostListItem from '../../Components/PostListItem/PostListItem'
import './ArchiveRoute.css'

export default class ArchiveRoute extends Component {
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
    return postList.filter((post) => post.is_resolved).map((post) => <PostListItem key={post.id} post={post} />)
  }

  render() {
    const { error } = this.context
    return (
      <div>
        <h2 className='archive-title'>Success Stories</h2>
        <section>
          {error ? <p>There was an error, try again</p> : this.renderPosts()}
        </section>
      </div>
    )
  }
}
