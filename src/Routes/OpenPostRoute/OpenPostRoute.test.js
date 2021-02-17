import React from 'react'
import ReactDOM from 'react-dom'
import OpenPostRoute from './OpenPostRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<OpenPostRoute />, div)

  ReactDOM.unmountComponentAtNode(div)
})
