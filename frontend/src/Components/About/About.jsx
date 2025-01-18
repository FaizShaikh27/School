import React from 'react'
import './About.css'
import about_img from '../../assets/about.png' 
import play_icon from '../../assets/play-icon.png' 

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tommorrow's leaders today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor explicabo repudiandae ut inventore ab perferendis nobis ea. Nam neque culpa recusandae iste ab animi. Aliquid rem sapiente officia ipsam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi dignissimos sunt nesciunt libero maxime, quod ab voluptates perferendis in id consequatur magni voluptatem velit est ipsa similique pariatur impedit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic error cumque quasi, necessitatibus atque, distinctio ipsam aut corporis saepe doloribus. Reprehenderit quas ea placeat dolore facilis illum pariatur ipsa?</p>
        </div>
    </div>
  )
}

export default About