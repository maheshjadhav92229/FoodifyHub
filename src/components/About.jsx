import React from 'react'
import './About.css'
import image from '../assets/hotel.jpeg'

const About = () => {
  return (
    <section className="about">
  <div className="about-container">
    <div className="about-text">
      <h1>About Us</h1>
      <p>
        welcome to out webiste we are passionate about building beautiful 
        and functional web application. out goal to provide the best user
        experidnce with modern technology 
      </p>
<p>
  we specialize in React developement, UI design,
   and creating responsive weistes that work on all device.
</p>
<button className ="about-btn">Learn More</button>
    </div>
    <div className="about-image">
      <img src={image} alt='about'></img>
    </div>
    </div>
    </section>
  )
}

export default About
