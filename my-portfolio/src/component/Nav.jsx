import React from 'react'

export default function Nav(props) {
  return (
    <div>
      <div>
        <h1>About</h1>
      </div>
      <div>
        <h1>Work</h1>
      </div>
      <div>
        <h1>Contact</h1>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
