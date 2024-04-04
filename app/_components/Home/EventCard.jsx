import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { data } from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'

const EventCard = ({data}) => {
  return (
    <div>
       <Card className=" max-w-sm  w-full bg-black border-2 hover:border-gray-800 border-gray-900">
              <CardHeader className="p-4 flex items-center mt-0  ">{/* {cardHeader}  */}
              
            <Image src={data?.img} width={300} height={400} className=' ' />
              </CardHeader>

              <CardContent className="   ">
              <p className=' text-gray-400 '>CSE Department</p>
              <h3 className='text-xl text-white font-semibold pl-2 '>Lorem ipsum dolor sit amet consectetur adipisicing  eli</h3>
              <div className='bg-gray-800 rounded-lg p-3 flex justify-between mt-2 flex-col'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-sm'>Date</p>
                        <p className='text-medium text-white'>12/12/2012</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-sm'>Venue</p>
                        <p className='text-medium text-white'>Audotorium</p>
                    </div>
                </div>

               
            </div>
              </CardContent>
              {/* <CardFooter className="  mb-2 flex justify-end"> <IoSettingsOutline className=" mb-2  text-2xl text-white" /></CardFooter> */}
            </Card>
    </div>
  )
}

export default EventCard
