import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import Context from '../../Context/Context'
import './Header.css'

export default class Header extends Component {
  static contextType = Context

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <div className='header-name'>
          <span>
            <b>Logged in as </b>
            {this.context.user.sub}
          </span>
        </div>
        <nav>
          <Link className='nav-links' to='/home'>
            <b>Home</b>
          </Link>
          <Link className='nav-links' to='/new-post'>
            <b>New Post</b>
          </Link>
          <Link className='nav-links' to='/archive'>
            <b>Success Stories</b>
          </Link>
          <Link
            className='nav-links'
            onClick={this.handleLogoutClick}
            to='/'
          >
            <b>Logout</b>
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className='login-register'>
        <Link className='nav-links' to='/login'>
          <b>Login</b>
        </Link>
        <Link className='nav-links' to='/register'>
          <b>Register</b>
        </Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1 className='header'>
          <Link className='title' to='/home'>
            Potty Planet
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    )
  }
}
