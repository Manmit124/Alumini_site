import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div>
    {
        [...new Array(10)].map((p,index)=>(
            <div key={index} className=" Alumini-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] gap-x-2  flex flex-row w-[20rem]  h-[8rem] mt-2 ">
              <div className="  rounded-full overflow-hidden">
                <Image
                  width={100}
                  height={120}
                  alt="Users image"
                 
                  className="    object-cover "
                />
              </div>
              <div className=" flex flex-col ">
                <h1 className=" text-2xl text-white"></h1>
                <p className=" text-white"></p>
                <p className=" text-white   text-sm t">
                  {" "}
                  Passionate Fullstack web developer is with great vision to
                  change my life and world also
                </p>
              </div>
            </div>
        ))
    }

    </div>
  )
}

export default loading
