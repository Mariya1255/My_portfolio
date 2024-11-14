import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/bennar_bg.png)] bg-cover'
    style={{backgroundSize: "28%", backgroundPosition: "left 100px top 150px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-80px)]'> 
        <div className='hidden lg:block'></div>
        <div className='text-145px] sm:text-[125px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-left">I&apos;m</p> {/* Yahan apostrophe ko escape kiya */}
            <p data-aos="zoom-in-left">Mariya</p>
            <p data-aos="zoom-in-left">Khan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero