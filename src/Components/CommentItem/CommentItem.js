import React from 'react'

export default function CommentItem(props) {
  const { comment } = props
  return (
    <li key={comment.id} className='comment'>
      <p className='comment-text'>{comment.comment}</p>
      <p className='comment-user'>{comment.user.username}</p>
    </li>
  )
}
