import React from 'react'
import { Link } from 'react-router-dom'

export default function FitnessTracker() {
  return (
    <div>
      <div>
        <h3>MyFitTrack</h3>
      </div>
      <div>
        <img src="" />
      </div>
      <div>
        <div>
          <h4>Description</h4>
        </div>
        <div>
          <p>MyFitTrack is an application with a purpose for users to track their progress and goals. This version allows a user to add and delete custom exercises. This application also splits the exercises into two separate categories: lifts and cardio. Depending on which category the user is recording their exercise, different fields will show for the user to fill out.</p>
        </div>
      </div>
      <div>
        <div>
          <a href="https://my-fit-track.netlify.app">
            <p>Visit Website</p>
          </a>
        </div>
        <div>
          <a href="https://github.com/timyoo25/fitness-tracker">
            <p>See Code</p>
          </a>
        </div>
      </div>
    </div>
  )
}
