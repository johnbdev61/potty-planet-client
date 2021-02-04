import React, { Component } from 'react'
import { Textarea } from '../../Components/Form'
import { Button } from '../../Components/Button/Button'
import PostContext from '../../Context/PostContext'

export default class CommentForm extends Component {
  render() {
    return (
      <form className='comment-form'>
        <div className='text'>
          <Textarea
            required
            aria-label ='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'
          >
          </Textarea>
        </div>
        <Button type ='submit'>
          Post Comment
        </Button>
      </form>
    )
  }
}
