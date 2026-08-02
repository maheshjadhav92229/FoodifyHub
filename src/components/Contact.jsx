import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
   <section className="contact">
     <div className="contact-container">
      <h1>Contact us</h1>
      <p className="contact-subtext">
        Feel free to reach out to us anytime!
      </p>
      <form className="contact-form">
        <input type="text" placeholder="your Name" required/>
        <input type = "email" placeholder="your email" required/>
        <textarea placeholder="your message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
