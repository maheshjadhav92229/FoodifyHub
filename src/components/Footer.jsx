import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div >
      <footer className="footer">
        <div className="footer-container">
          <h3>Food Delivery</h3>
          <p>Delicious foo delivered to your doorstep</p>
          <p className="copyright">@ {new Date().getFullYear()} Food Delivery .All Right reserverd</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
