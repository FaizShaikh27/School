import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h3>Shree Gajanan Maharaj Bahuuddeshiya Shikshan Sanstha's</h3>
            <h1>DR.B B CHAVAN MILITARY SCHOOL AND ACADEMY</h1>
            <p>Dr.B B Chavan School Campus Gut No 235, Khandi Pimpalgaon, Tal-Khultabad, Dist-Sambhaji Nagar</p>
            <button className='btn'>Explore More <img src={dark_arrow}  /></button>
        </div>
    </div>
  )
}

export default Hero