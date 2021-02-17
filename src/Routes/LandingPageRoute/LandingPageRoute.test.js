import React from 'react'
import ReactDOM from 'react-dom'
import LandingPageRoute from './LandingPageRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LandingPageRoute />, div)

  ReactDOM.unmountComponentAtNode(div)
})
