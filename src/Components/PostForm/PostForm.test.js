import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PostForm from './PostForm'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <PostForm />
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
