import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CommentItem from './CommentItem'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <CommentItem />
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
