import React, { Component } from 'react'
import { Textarea } from '../../Components/Form/Form'
import Button from '../../Components/Button/Button'
import PostContext from '../../Context/PostContext'
import PostApiService from '../../Services/post-api-service'

export default class CommentForm extends Component {
  static contextType = PostContext

  handleSubmit = (event) => {
    event.preventDefault()
    const { post } = this.context
    const { text } = event.target
    PostApiService.postComment(post.id, text.value)
      .then((comment) => this.context.addComment(comment))
      .then(() => {
        text.value = ''
      })
      .catch((error) => this.context.setError(error))
  }

  render() {
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <div className='text'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            rows='4'
            cols='50'
            placeholder='Type a comment..'
          ></Textarea>
        </div>
        <div className='btn'>
          <Button type='submit'>Post Comment</Button>
        </div>
      </form>
    )
  }
}