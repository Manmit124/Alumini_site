"use client"
import { FaUser, FaUserGraduate, FaPen, FaBug } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdWork, MdFeedback, MdEngineering, MdSpaceDashboard } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";


const SideNav = () => {
  const [show, setShow] = useState(false);
  const pathname=usePathname();
  console.log(pathname)

  const links = [
    {
      name: "Dashboard",
      icon: <MdSpaceDashboard className="inline-block" />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <FaUser className="inline-block" />,
      path: "/profile",
    },
    {
      name: "Profile Edit",
      icon: <FaUserGraduate className="inline-block" />,
      path: "/edit",
    },
    {
      name: "Share Experience",
      icon: <GiGiftOfKnowledge className="inline-block" />,
      path: "/share-experience?tab=new-posts",
    },
    {
      name: "Write a Blog",
      icon: <FaPen className="inline-block" />,
      path: "/write-a-blog?tab=new-post",
    },
    {
      name: "Post a Job",
      icon: <MdWork className="inline-block" />,
      path: "/post-a-job?tab=prev-posts",
    },
    {
      name: "Post an Internship",
      icon: <MdEngineering className="inline-block" />,
      path: "/post-an-internship?tab=post-internship",
    },
    {
      name: "Give Testimonial",
      icon: <MdFeedback className="inline-block" />,
      path: "/give-testimonial",
    },
    {
      name: "Report a Bug",
      icon: <FaBug className="inline-block" />,
      path: "/report-bug",
    },
    {
      name:"Share Feedback",
      icon:<MdFeedback className="inline-block" />,
      path:"/share-feedback",
    }
  ]


  return (
    <div className={`border-r z-20 lg:sticky md:relative transition-all top-0 fixed bg-black border-b border-gray-800 px-3 py-5 lg:flex md:flex flex-col gap-2 items-start w-[16rem] h-screen pt-24 ${show ? null : "lg:left-0 md:left-0 lg:translate-x-0 md:translate-x-0 translate-x-[-100%]"}`}>
      <button onClick={() => setShow(!show)} className="bg-gray-800 absolute lg:hidden md:hidden top-[9rem] animate-pulse -right-9 px-2 pl-4 py-2.5 rounded-xl border border-gray-700">
        {
          show ?
            <IoIosArrowBack className="text-gray-300 text-2xl" />
            :
            <IoIosArrowForward className="text-gray-300 text-2xl" />
        }
      </button>
      <h2 className="font-bold text-sky-500 text-xl px-4 py-2">Welcome User!</h2>
      <div className="flex flex-col lg:gap-1 gap-3 sm:gap-4">
        {
          links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="w-full rounded-xl"
            >
              {/* {({ isActive }) => ( */}
              
                <button onClick={() => setShow(false)} className={`text-gray-300 w-full flex items-center gap-3 font-medium text-start px-4 py-2 rounded-xl ${pathname==link.path ? "bg-sky-500 text-gray-900 rounded-xl" : "hover:bg-gray-700"} `}>
                  {link.icon} {link.name}
                </button>
              {/* )} */}
            </Link>
          ))
        }
        <Button  variant="destructive" onClick={() => signOut()} className="text-gray-300 w-full flex items-center gap-3 font-medium text-start px-4 py-2 rounded-xl ">
            Logout
            </Button>
      </div>
    </div>
  )
}

export default SideNav