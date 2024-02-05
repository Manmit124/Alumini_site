"use client"
import Userprofile from '@/hooks/userProfile'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  const {loading, data}=Userprofile();
  return (
    <section className="mt-8 max-w-6xl mx-auto">
      <div className="lg:py-5 mx-auto text-center flex flex-col items-center">
  

      <h1 className="text-3xl font-bold text-white sm:text-6xl lg:my-3">Alumini&apos s</h1>

      </div>


      <div className=' py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] gap-x-2  flex flex-row w-[20rem]'>
      <div>

    <Image
      width={120}
      height={120}
      alt='Users image'
      src={data.image}
      className=' rounded-xl  '
    />
      </div>
      <div className=' flex flex-col '>
      <h1 className=' text-white  text-xl font-bold '>Manmit Tiwade</h1>
      <p className=' text-white  text-sm'> Passionate Fullstack web developer is with great vision to change my life and world also</p>
      </div>
   
      </div>
      </section>
  )
}

export default Page
