import React, { Component } from 'react'
import image from '../../Images/404.jpg'
import './NotFoundRoute.css'

export default class NotFoundRoute extends Component {
  render() {
    return (
      <div>
        <h2 className='not-found'>404 - Page not found</h2>
        <img className='toilet' src={image} alt='flush'/>
        <p className='nf-content'>Try going back to your previous page.</p>
      </div>
    )
  }
}
