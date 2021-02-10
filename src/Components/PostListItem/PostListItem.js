import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactMoment from 'react-moment'
import moment from 'moment'
import './PostListItem.css'

export default class PostListItem extends Component {
  render() {
    const { post } = this.props
    const dateCreated = moment().format(post.date_created)
    return (
      <div className='post-card post-card:hover'>
        <h3>
          <Link className='post-link' to={`/open-post/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        <p className='card-content'>
          Created by: <b>{post.username}</b>
        </p>
        <p className='card-content'>
          Date Posted:{' '}
          <ReactMoment format='MM/DD/YYYY'>{dateCreated}</ReactMoment>
        </p>
      </div>
    )
  }
}
