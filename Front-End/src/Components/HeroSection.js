import React from 'react';
import "./HeroSection.css";
import img from './Images/inside.jpg';
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <div id='hero'>
      <div className='bar'></div>
      <div className='container'>
        <div className='about'>
            <h1 className='title'>Our Story</h1>
            <p className='text'>
                Welcome to the Lighthouse Bistro, the premier sea front restaurant near the beach. 
                We take the latest catches of the day and create a new menu each season. Come in and
                enjoy the best food we can offer. 
            </p>
            <Link to="hours" spy={true} smooth={true} offset={50} duration={500}
            className='button-2'>Learn More</Link>
        </div>

        <img className='home_image' src={img}/>
      
      </div>
      <div className='bar'></div>
    </div>
  )
}

export default HeroSection
