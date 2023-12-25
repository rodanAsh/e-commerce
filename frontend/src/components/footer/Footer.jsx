import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import instagram from '../assets/instagram-color.png'
import pinterest from '../assets/pinterest-color.png'
import whatsapp from '../assets/whatsapp-color.png'

const Footer = () => {
    const year = new Date();
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>KHAADI</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className="social-links">
            <div className="social-icon">
                <img src={instagram} alt="" />
            </div>
            <div className="social-icon">
                <img src={pinterest} alt="" />
            </div>
            <div className="social-icon">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; {year.getFullYear()} - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer