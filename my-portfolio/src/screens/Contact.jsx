import "./css/Contact.css"

export default function Contact() {
  return (
    <div className="contact-parent">
      <div className="contact-title-container">
        <h1 className="contact-title">CONTACT ME</h1>
      </div>
      <div className="contact-info-container">
        <div className="resume-container">
          <h3 className="resume-title">
            <a className="resume-link" href="https://drive.google.com/file/d/1TE1tcMXw4Ev8aTq6e8QLhJfwiU4g3Quy/view?usp=sharing">Resume</a>
          </h3>
          <p className="resume-text">(Click me!)</p>
        </div>
        <div className="contact-email-container">
          <h3 className="contact-email-title">EMAIL: </h3>
          <p className="contact-email">timyoo25@gmail.com</p>
        </div>
        <div className="contact-li-container">
          <h3 className="contact-li-title">LINKEDIN: </h3>
          <a className="contact-link" href="https://www.linkedin.com/in/timothy-yoo/">https://www.linkedin.com/in/timothy-yoo/</a>
        </div>
        <div className="contact-gh-container">
          <h3 className="contact-gh-title">GITHUB: </h3>
          <a className="contact-link" href="https://github.com/timyoo25">https://github.com/timyoo25</a>
        </div>
      </div>
    </div>
  )
}
