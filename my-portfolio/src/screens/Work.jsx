import { Link } from "react-router-dom"

export default function Work() {
  return (
    <div>
      <div>
        <h1>my work</h1>
      </div>
      <div>
        <Link to="/">Fitness Tracker</Link>
      </div>
      <div>
        <Link to="/">Kitchintory</Link>
      </div>
      <div>
        <Link to="/">HealthElite</Link>
      </div>
    </div>
  )
}
