import React from 'react'
import landmarks from '../images/landmarks.png';
import "./About.css";

export default function About() {
  return (
    <div className='about-container'>
      <img src={landmarks} className="logo2"></img>
      <h1 className='headerText'>Geo is your gateway to the world of landmarks and exploration. Our website is your personal tour guide, allowing you to effortlessly track and discover your favorite landmarks from around the globe. Whether you're a seasoned traveler or an armchair adventurer, Geo provides a treasure trove of information on these iconic destinations. From historical facts and breathtaking photos to insider tips and travel itineraries, Geo is your one-stop destination for all things landmarks. Embark on a journey of discovery with us and let the wonders of the world inspire your wanderlust. Join the Geo community and start exploring today!</h1>
      

    </div>
  )
}
