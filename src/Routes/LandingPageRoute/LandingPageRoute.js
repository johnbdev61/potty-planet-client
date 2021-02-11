import React, { Component } from 'react'
import './LandingPageRoute.css'

export default class LandingPageRoute extends Component {
  render() {
    return (
      <div>
        <h2 className='welcome-title'>Welcome to Potty Planet</h2>
        <p className='welcome-body'>
          This application provides a space for parents to come together and
          share their experiences and questions about potty training their
          children. Users may create a new post to share your experience and ask
          for advice. Other users will be able to comment and share their
          experiences in the comment section of your post. When your question is
          answered or your child successfully uses to potty, you can click the
          resolved button in your post and it will be archived to Success
          Stories. You may click 'Success Stories' in the nav to review past
          potty training successes.
        </p>

        <p className='welcome-body'>
          Login above if you have an account. If you are new to Potty Planet,
          welcome! Please click the register link above.
        </p>
      </div>
    )
  }
}
