import React from 'react'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div className=' relative flex flex-col  h-full w-full '>
    <video 
    autoPlay
    muted
    loop 
    className=' rotate-180 absolute lg:top-[-350px] top-[-550px] left-0  w-full h-full object-cover z-[-10]'
    >

      <source src='/Home/blackhole.webm'  type='video/webm' />
    </video>
    <HeroContent/>
    </div>
  )
}

export default Hero
