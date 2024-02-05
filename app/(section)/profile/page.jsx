"use client"

import { Button } from '@/components/ui/button';
import Userprofile from '@/hooks/userProfile'
import Link from 'next/link';
import React from 'react'

const Page = () => {
  const {loading,data}=Userprofile();

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <div className="lg:py-5 mx-auto text-center flex flex-col items-center">
  

      <h1 className="text-3xl font-bold text-white sm:text-6xl lg:my-3">Profile</h1>

      </div>
      <div>
      <Link href={"/profile/edit"}>

       <Button >Edit</Button>
      </Link>
      </div>
      </section>
  )
}

export default Page
