import React, { Component } from 'react'
import PostContext from '../../Context/PostContext'
import PostApiService from '../../Services/post-api-service'
import CommentForm from '../../Components/CommentForm/CommentForm'
import CommentItem from '../../Components/CommentItem/CommentItem'

export default class OpenPostRoute extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = PostContext

  componentDidMount() {
    const { postId } = this.props.match.params
    this.context.clearError()
    PostApiService.getPost(postId)
      .then((post) => {
        this.context.setPost(post)
        return PostApiService.getPostComments(postId)
      })
      .then((comments) => {this.context.setComments(comments)})
      .catch(this.context.setError)  
  }

  componentWillUnmount() {
    this.context.clearPost()
  }

  render() {
    const { post, comments = [] } = this.context
    console.log('CONTEXT', this.context)
    return (
      <section>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.username}</p>
        <p>{post.date_created}</p>
        <CommentForm />
        <p>Comments</p>
        <ul>
          {comments.map((comment) => (
            <CommentItem comment={ comment } />
          ))}
        </ul>
      </section>
    )
  }
}