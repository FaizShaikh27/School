import React from 'react'
import './Values.css'
import value_1 from '../../assets/value_1.jpg'
import value_2 from '../../assets/value_2.jpg'
import value_3 from '../../assets/value_3.jpg'
import value_icon_1 from '../../assets/program-icon-1.png'
import value_icon_2 from '../../assets/program-icon-2.png'
import value_icon_3 from '../../assets/program-icon-3.png'

const Facilities = () => {
  return (
    <div className='values'>
        <div className="value">
            <img className='main_img' src={value_1} alt="" />
            <div className="caption">
                <img src={value_icon_2} alt="" />
                <p>Integrity</p>
            </div>
        </div>
        <div className="value">
            <img className='main_img' src={value_2} alt="" />
            <div className="caption">
                <img src={value_icon_1} alt="" />
                <p>Discipline</p>
            </div>
        </div>
        <div className="value">
            <img className='main_img' src={value_3} alt="" />
            <div className="caption">
                <img src={value_icon_3} alt="" />
                <p>Leadership</p>
            </div>
        </div>
        
    </div>
  )
}

export default Facilities