import React from 'react'
import HeroContent from './HeroContent'
import Image from 'next/image'
import StarCanvas from './StarBackground'
import ImageSlider from './ImageSlider'
import QuickLinks from './QuickLinks'
import Events from './Events'
import NotableAlumniMarquee from './NotableAlumniMarquee'
import Testomonials from './Testimonials'
import Faq from './Faq'

const Hero = () => {
  return (
    <div className='      '>
   
    {/* <video 
    autoPlay
    muted
    loop 
    className=' rotate-180 absolute lg:top-[-350px] top-[-550px] left-0  w-full h-full object-cover z-[-10]'
    >

      <source src='/Home/blackhole.webm'  type='video/webm' />
    </video> */}
<ImageSlider/>
    {/* <div className='mx-auto max-w-4xl px-6 lg:px-8'>
          
              <div className=' flow-root sm:mt-24'>
             
                <div className='m-2 rounded-xl bg-white-900/5 p-2 ring-1 ring-inset ring-white lg:-m-4 lg:rounded-2xl lg:p-4 bg-[#03001417] backdrop-blur-md '>
                <h1>This Beautiful Painnting for you </h1>
                  <Image
                    src='/college.jpg'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    loading="lazy"
                    className='rounded-md  p-2 shadow-2xl ring-1 ring-white'
                  />
                </div>
              </div>
            </div> */}
         

    <HeroContent/>
    <QuickLinks/>
    <Events/>
    <NotableAlumniMarquee />
    <Testomonials/>
    <Faq/>
        
    </div>
  )
}

export default Hero
