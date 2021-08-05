import "./css/About.css"

export default function About() {
  return (
    <div className='about-parent'>
      <div className='about-image'>
        <img src="https://i.imgur.com/hSMNht0.jpg" />
      </div>
      <div className='about-container'>
        <div className='about-title-container'>
          <h3 className='about-title'>ABOUT ME</h3>
        </div>
        <div className='summary-container'>
          <p className='summary'>I am a software engineer who has a background in financial analysis, risk operations and sales. I love to take on new challenges with a mindset of perserverance and humility. With my previous experiences, I've had the opportunities to learn mulitple skillsets and how to work as a cohesive unit amongst peers. As I have not been shy to a fast-paced working environment at Gusto, I've been able to practice adaptation and discipline.</p>
        </div>
      </div>
    </div>
  )
}
