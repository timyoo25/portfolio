import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import '../screens/css/Nav.css'

export default function Nav() {
  return (
    <div className='nav-parent'>
      <div className='nav-name'>
        <p>TIMOTHY YOO ///</p>
      </div>
        <button className="hamburger">
          <FontAwesomeIcon icon={faBars} />
        </button>
      <div className='nav-title-parent'>
        <div className='nav-title'>
          <Link className='nav-links' to="/">Home</Link>
        </div>
        <div className='nav-title'>
          <Link className='nav-links' to="/about">About</Link>
        </div>
        <div className='nav-title'>
          <Link className='nav-links' to="/work">Portfolio</Link>
        </div>
        <div className='nav-title'>
          <Link className='nav-links' to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}
