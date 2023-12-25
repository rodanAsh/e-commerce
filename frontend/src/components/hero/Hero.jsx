import React from 'react'
import './Hero.css'
import plane from '../assets/plane.png'
import arrow from '../assets/rightArrow.png'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
          <h2 className='hero-heading'>NEW ARRIVALS ONLY</h2>
          <div className='left-top'>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={plane} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <p>Latest Collection</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero