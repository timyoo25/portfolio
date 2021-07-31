import React from 'react'

import Nav from '../component/Nav'

export default function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}
