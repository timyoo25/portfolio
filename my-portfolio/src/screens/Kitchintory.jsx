import "./css/Kitchintory.css"

export default function Kitchintory() {
  return (
    <div className="kitchintory-parent">
      <div className="kitchintory-title">
        <h3 className="kitchintory-title">Kitchintory</h3>
      </div>
      <div className="kitchintory-container">
        <div className="kitchintory-image-container">
          <img className="kitchintory-image" src="https://i.imgur.com/KQrjIap.png" />
        </div>
        <div className="kitchintory-description-parent">
          <div className="kitchintory-description-title-container">
            <h4 className="kitchintory-description-title">Description</h4>
          </div>
          <div className="kitchintory-description-container">
            <p className="kitchintory-description">Kitchintory is an application for restaurant management. It's a tool to keep track of what's in stock and what is needed so that you minimize waste and maximize profits. This application features full CRUD capabilities on the ingredients with login capabilities. This application was built in a team environment of fellow junior developers.</p>
          </div>
        <div className="kitchintory-links-parent">
          <div className="kitchintory-website">
            <a href="https://kitchintory.netlify.app/">
              <p className="kitchintory-link">Visit Website</p>
            </a>
          </div>
          <div className="kitchintory-github">
            <a href="https://github.com/timyoo25/kitchintory">
              <p className="kitchintory-link">See Code</p>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
