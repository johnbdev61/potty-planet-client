import React from 'react'
import ReactDOM from 'react-dom'
import ArchiveRoute from './ArchiveRoute'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ArchiveRoute />, div)

  ReactDOM.unmountComponentAtNode(div)
})
