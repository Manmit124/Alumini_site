import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const page = () => {
  const dashboardItems = [
    {
      name: 'Profile',
      desc: 'Your profile',
      link: '/profile',
    },
    {
      name: 'Alumni Profile',
      desc: 'Edit Alumni Profile',
      link: '/edit',
    },
    {
      name: 'Read Blogs',
      desc: 'Blogs',
      link: '/blogs',
    },
    {
      name: 'Read Experiences',
      desc: 'Experiences',
      link: '/experiences',
    },
    {
      name: 'Explore Internships',
      desc: 'Internships',
      link: '/internships',
    },
    {
      name: 'Explore Jobs',
      desc: 'Jobs',
      link: '/jobs',
    },
    {
      name: 'Give Testimonial',
      desc: 'Give Testimonial',
      link: '/give-testimonial',
    },
    {
      name: 'Post Job Opening',
      desc: 'Jobs',
      link: '/post-a-job?tab=create-job',
    },
    {
      name: 'Post Intern Opening',
      desc: 'Internships',
      link: '/post-an-internship?tab=post-internship'
    },
    {
      name: 'Write a Blog',
      desc: 'Blogs',
      link: '/write-a-blog?tab=new-post',
    },
    {
      name: 'Share Experience',
      desc: 'Experiences',
      link: '/share-experience?tab=new-posts',
    },
    {
      name: 'Report Bugs',
      desc: 'Report problems',
      link: '/report-bug',
    }
  ]
  return (
    <div className='lg:px-9 px-4 mt-16'>
    
    <h1 className='font-extrabold text-transparent lg:text-6xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-100  to-sky-600 large-heading ml-10'>Alumni Dashboard</h1>

    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
      <div className="text-lg font-medium ">Welcome to Alumni GCOEC</div>
      <div className="flex gap-3">
        {/* <button disabled={loading} onClick={async () => {
          if (isSubscribed) {
            const res = window.confirm('Are you sure you want to unsubscribe?');
            if (res) {
              await unSubscribeAndUnRegister();
              setIsSubscribed(false);
            }
          } else {
            await registerAndSubscribe();
            setIsSubscribed(true);
          }
        }} className="bg-sky-500 hover:bg-sky-600 disabled:bg-gray-600 active:bg-gray-500 text-white px-3 py-1.5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'} to Notifications
        </button> */}
      </div>
    </div>


    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mt-5 md:gap-5 gap-3">
      {dashboardItems.map((item, index) => (
        <Link href={item.link} key={index} className="bg-[#0d0d12] border border-gray-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
          <div className="flex md:flex-row flex-col group p-6 md:items-center items-start gap-y-3 hover:scale-[98%] transition-all justify-between">
            <div>
              <div className="text-lg text-white group-hover:text-sky-500 font-medium">{item.name}</div>
              <div className="text-gray-400 text-sm">{item.desc}</div>
            </div>
            <FaArrowRight className="md:text-2xl md:self-center self-end text-xl text-gray-400 group-hover:text-sky-500" />
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default page
