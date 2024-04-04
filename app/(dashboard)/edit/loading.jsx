import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading(){
  return (
<div className=" flex-col space-y-3 mx-auto  min-h-screen flex justify-center items-center">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

