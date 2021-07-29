import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/work">Work</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}
