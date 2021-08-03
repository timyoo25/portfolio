import "./css/FitnessTracker.css"

export default function FitnessTracker() {
  return (
    <div className="fitness-parent">
      <div className="fitness-title-container">
        <h3 className="fitness-title">MyFitTrack</h3>
      </div>
      <div className="fitness-container">
        <div className="fitness-image-container">
          <img className="fitness-image" src="https://i.imgur.com/fc7nHJT.png" />
        </div>
        <div className="fitness-description-parent">
          <div className="fitness-description-title-container">
            <h4 className="fitness-description-title">Description</h4>
          </div>
          <div className="fitness-description-container">
            <p className="fitness-description">MyFitTrack is an application with a purpose for users to track their progress and goals. This version allows a user to add and delete custom exercises. This application also splits the exercises into two separate categories: lifts and cardio. Depending on which category the user is recording their exercise, different fields will show for the user to fill out.</p>
          </div>
          <div className="fitness-links-parent">
            <div className="fitness-website">
              <a href="https://my-fit-track.netlify.app">
                <p className="fitness-link">Visit Website</p>
              </a>
            </div>
            <div className="fitness-github">
              <a href="https://github.com/timyoo25/fitness-tracker">
                <p className="fitness-link">See Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
