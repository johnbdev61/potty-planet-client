import React from 'react'
import './CommentItem.css'

export default function CommentItem(props) {
  const { comment } = props
  return (
    <li key={comment.id} className='comment-card'>
      <p className='comment-user'>
        <b>{comment.user.username}</b> says:
      </p>
      <p className='comment-content'>{comment.comment}</p>
    </li>
  )
}
