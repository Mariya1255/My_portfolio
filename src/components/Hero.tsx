import React from 'react';
import Navbar from './Navbar';
import '../app/styles/hero.css';


const Hero = () => {
  return (
    <div id="hero"
     className='hero-container'
    >
      <Navbar />
      <div className='hero-content'> 
        <div className='hidden lg:block'></div>

        <div className='hero-text'>
          <div className='hero-msin'>
            <p data-aos="zoom-in-left">I&apos;m</p> 
            <p data-aos="zoom-in-left">Mariya</p>
            <p data-aos="zoom-in-left">Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;