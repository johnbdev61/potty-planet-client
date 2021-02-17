import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NewPostRoute from './NewPostRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <NewPostRoute />
    </BrowserRouter>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
