import React from 'react'
import ReactDOM from 'react-dom'
import HomeRoute from './HomeRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HomeRoute />, div)

  ReactDOM.unmountComponentAtNode(div)
})
