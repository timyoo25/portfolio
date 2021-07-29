import { Link } from "react-router-dom"

export default function Work() {
  return (
    <div>
      <div>
        <h1>my work</h1>
      </div>
      <div>
        <Link to="/myfittrack">My Fit Track</Link>
      </div>
      <div>
        <Link to="/kitchintory">Kitchintory</Link>
      </div>
      <div>
        <Link to="/healthelite">HealthElite</Link>
      </div>
    </div>
  )
}
