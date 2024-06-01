import ShareExperience from '@/app/_components/(dashboard)/Share-Experience/ShareExperience'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
    <Suspense>

      <ShareExperience/>
    </Suspense>
    </div>
  )
}

export default page
