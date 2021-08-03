import { Link } from "react-router-dom"

import "./css/Work.css"

export default function Work() {
  return (
    <div className='work-parent'>
      <div className='work-title-container'>
        <h1 className='work-title'>Portfolio</h1>
      </div>
      <div className='link-container'>
        <Link className='work-link' id='fittrack' to="/myfittrack">
          <div className='work-fittrack-container'>
            <img className="work-image" src="https://i.imgur.com/fc7nHJT.png"/>
            <h3>MyFitTrack</h3>
          </div>
        </Link>
        <Link className='work-link' id='kitchintory ' to="/kitchintory">
          <div className='work-kitchintory-container'>
            <img className="work-image" src="https://i.imgur.com/KQrjIap.png" />
            <h3>Kitchintory</h3>
          </div>
        </Link>
        <Link className='work-link' id='healthelite' to="/healthelite">
          <div className='work-healthelite-container'>
            <img className="work-image" src="https://i.imgur.com/I1JleuU.png" />
            <h3>HealthElite</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}
