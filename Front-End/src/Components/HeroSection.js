import React from 'react';
import "./HeroSection.css";
import img from './Images/inside.jpg';

function HeroSection() {
  return (
    <div id='hero'>
      <div className='container'>
        <div className='about'>
            <h1 className='title'>Our Story</h1>
            <p className='text'>
                Welcome to the Lighthouse Bistro, the premier sea front restaurant near the beach. 
                We take the latest catches of the day and create a new menu each season. Come in and
                enjoy the best food we can offer. 
            </p>
            <button className='button-2'>Learn More</button>
        </div>

        <img className='home_image' src={img}/>
      
      </div>
    </div>
  )
}

export default HeroSection
