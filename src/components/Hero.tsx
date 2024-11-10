import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/bennar_bg.png)] bg-cover"
    style={{backgroundSize: "25%", backgroundPosition: "left 150px top 150px"}}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className='hidden lg:block'></div>
        <div className="text-[80px] sm:text-[118px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="flip-up">I&apos;m</p> {/* Yahan apostrophe ko escape kiya */}
            <p data-aos="flip-up">Mariya</p>
            <p data-aos="flip-up">Khan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero