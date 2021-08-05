import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import HamburgerInfo from './HamburgerInfo'

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faBars} onClick={handleMenu}/>
      </div>
      <div>
        {HamburgerInfo.length && (
          <nav className={`nav ${open ? 'show' : ''}`} >
            <ul className="menu">
              {HamburgerInfo.map(data => (
              <div>
                <li className="menu-list" key={data.label}>
                  <a className="menu-link" href={data.url}>{data.label}</a>
                </li>
              </div>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}
