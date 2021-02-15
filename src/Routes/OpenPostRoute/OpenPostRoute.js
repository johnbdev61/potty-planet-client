import React, { Component } from 'react'
import PostContext from '../../Context/PostContext'
import Context from '../../Context/Context'
import PostApiService from '../../Services/post-api-service'
import CommentForm from '../../Components/CommentForm/CommentForm'
import CommentItem from '../../Components/CommentItem/CommentItem'
import './OpenPostRoute.css'

export default class OpenPostRoute extends Component {
  static defaultProps = {
    match: { params: {} }
  }

  static contextType = PostContext

  state = { posts: [] }

  componentDidMount() {
    const { postId } = this.props.match.params
    this.context.clearError()
    PostApiService.getPost(postId)
      .then((post) => {
        this.context.setPost(post)
        console.log('POST', post)
        return PostApiService.getPostComments(postId)
      })
      .then((comments) => {this.context.setComments(comments)})
      .catch(this.context.setError)  
  }

  handlePostChange = (postId) => {
    const updatedPosts = this.state.posts.filter((post) => {
      return post.id !== postId
    })
    this.setState({ posts: updatedPosts })
  }

  handleDeleteClick = () => {
    console.log('hello world')
    PostApiService.deletePost(this.props.match.params.postId).then(() => {
      this.handlePostChange(Number(this.props.match.params.postId))
      this.props.history.push('/home')
    })
  }

  handleResolveClick = () => {
    PostApiService.updatePost(this.props.match.params.postId).then(() => {
      this.handlePostChange(Number(this.props.match.params.postId))
      this.props.history.push('/archive')
    })
  }

  componentWillUnmount() {
    this.context.clearPost()
  }

  render() {
    const { post, comments = [] } = this.context
    console.log('CONTEXT', this.context)
    console.log('PROPS', this.props)
    return (
      <section>
        <div className='open-post-card'>
          <h2 className='post-title'>{post.title}</h2>
          <Context.Consumer>
            {(context) => (
              <>
                {context.user.id === post.author_id ? (
                  <section className='delete-resolve'>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                    <button disabled={post.is_resolved} onClick={this.handleResolveClick}>Mark Resolved</button>
                  </section>
                ) : null}
              </>
            )}
          </Context.Consumer>
          <p className='post-content'>{post.username}</p>
          <p className='post-content'>{post.content}</p>
        </div>
        <div className='comment-form'>
          <h3 className='comment-title'>Comments</h3>
          <CommentForm />
        </div>
        <hr />
        <ul>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      </section>
    )
  }
}