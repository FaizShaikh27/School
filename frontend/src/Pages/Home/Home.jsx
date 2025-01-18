import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Values from '../../Components/Values/Values'
import Title from '../../Components/Title/Title'
import About from '../../Components/About/About'
import Campus from '../../Components/Campus/Campus'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import Marquee from '../../Components/Marquee/Marquee'

const Home = () => {
    
  return (
    <div>
      <Hero />
      <div className="container">
        <Title subtitle = 'Our Values' title='What we offer' />
        <Values />
        <About />
        <Title subtitle = 'Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle = 'TESTIMONIALS' title='What the student says' />
        <Testimonials />
        <Title subtitle = 'Contact Us' title='Get in Touch' />
        <Contact/>
      </div>
      
      
      
    </div>
  )
}

export default Home