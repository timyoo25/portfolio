import "./css/HealthElite.css"

export default function HealthElite() {
  return (
    <div className="health-parent">
      <div className="health-title-container">
        <h3 className="health-title">HEALTHELITE</h3>
      </div>
      <div className="health-container">
        <div className="health-image-container">
          <img className="health-image" src="https://i.imgur.com/I1JleuU.png" />
        </div>
        <div className="health-description-parent">
          <div className="health-description-title-container">
            <h4 className="health-description-title">DESCRIPTION</h4>
          </div>
          <div className="health-description-container">
            <p className="health-description">HealthElite is an application with a purpose for users to have full CRUD capabilities for products and reviews. This application has 5 different categories that users can create products in, and within each product, ability to add a review.</p>
            </div>
            <div className="health-links-parent">
              <div className="health-website">
                <a href="https://healthelite.netlify.app/">
                  <p className="health-link">Visit Website</p>
                </a>
              </div>
            <div className="health-github">
              <a href="https://github.com/timyoo25/healthelite">
                <p className="health-link">See Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
