"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import MobileMenu from "./MobileMenu";
import Userprofile from "@/hooks/userProfile";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLinks } from "@/config/config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUserGraduate } from "react-icons/fa6";

const Navbar = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userImage = userData?.image;
  const { loading, data } = Userprofile();
  const [menu, setMenu] = useState(false);
  const [popup, setPopup] = useState(-1);

  return (
    <>
      <MobileMenu />
      {/* shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  shadow-lg*/}
      <div className="w-full lg:h-[65px] fixed top-0   z-50 px-10 hidden md:flex lg:flex  ">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <Link
            href={"/"}
            className=" h-auto w-auto flex  flex-row items-center mr-10"
          >
            <div className=" mt-2">
              {/* <Image
          src={"/logo.png"}
            alt="logo"
            width={40}
            height={30}
            className=" cursor-pointer  mt-3 "
          /> */}
            </div>
            <span className=" font-bold hidden md:block text-gray-300 ">
              Alumni-Nexus
            </span>
          </Link>
          <div className=" h-full flex flex-row items-center justify-between md:mr-20     ">
            <div className="flex items-center justify-between w-full  h-auto border border-[#7042f861] bg-[#03001485] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 overflow-hidden">
              <ul className="flex  items-center gap-x-10">
                {NavLinks.map((link, index) => {
                  if (link.children) {
                    return (
                      <>
                        <div key={index}>
                       
                          <button
                            onClick={() => setPopup(popup===index ? null :index)}
                            // onMouseOver={() => {
                            //   if (popup > -1) {
                            //     setPopup(-1);
                            //   } else {
                            //     setPopup(index);
                            //   }
                            // }}
                            // onMouseLeave={() => setPopup(-1)}
                            onMouseEnter={() => setPopup(index)}
                      // onMouseLeave={() => setPopup(null)}
                            style={{ textDecoration: "none" }}
                            key={index}
                            className=" flex flex-row items-center"
                          >
                            {link.name}
                            {link.children && (
                        <MdKeyboardArrowDown
                          className={`${popup === index ? "transform rotate-180" : ""}`}
                          size={24}
                        />
                      )}
                          </button>
                        
                          <div
                            onMouseLeave={() => setPopup(null)}
                            // onMouseOver={() => {
                            //   setPopup(index);
                            // }}
                          >
                            {link.children && popup === index && (
                              <div className={`bg-gray-950 shadow-lg border border-[#7042f861] rounded-xl absolute mt-2  ${popup===index?"flex":"hidden"}`}>
                                <ul className="flex flex-col gap-1.5">
                                  {link.children.map((child, i) => (
                                    <Link
                                      key={i + "child"}
                                      href={child.link}
                                     
                                      className=" "
                                    >
                                      <p onClick={() => setPopup(null)} className="block px-4 py-2 text-gray-400 hover:text-blue-400">
                                        {child.name}
                                         
                                      </p>
                                      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      
                      </>
                    );
                  }else{
                    return (
                  <Link key={index + "other"} style={{ textDecoration: "none" }} href={link.link}>
                    <p
                      className="text-white hover:text-blue-400"
                    >
                      {link.name}
                    </p>
                  </Link>
                    )
                  }
                })}
              </ul>
            </div>
          </div>

          <div className=" flex items-center gap-x-3">
            {status === "authenticated" && (
              <>
                <Link href={"/profile"}>
                  <div>
                    {/* <Image
                      src={data?.image}
                      height={35}
                      width={35}
                      alt="user image "
                      className=" rounded-xl "
                    /> */}
                      {data.image ? (
            <Avatar>
              <AvatarImage src={data.image} alt="logo" />
              <AvatarFallback><FaUserGraduate/></AvatarFallback>
            </Avatar>
          ) : (
            <Avatar
              sx={{ width: 100, height: 96, padding: 0 }}
              color="primary"
            >
                 <AvatarFallback><FaUserGraduate  className=" text-2xl"/></AvatarFallback>
            </Avatar>
          )}
                  </div>
                </Link>
                {/* <Button
                onClick={() =>
                  signOut({
                    callbackUrl: `${window.location.origin}/login`,
                  })
                }
              >
                Logout
              </Button> */}
              </>
            )}
            {status === "unauthenticated" && (
              <Link href={"/login"}>
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
  {/* <div onMouseLeave={()=>setPopup(-1)} onMouseOver={()=>{setPopup(index)}}> */}
                        {/* <div>
                          <div
                            className={`bg-gray-950 shadow-lg   border  border-gray-800 px-5 w-48 py-5 rounded-xl absolute flex-col  ${
                              popup === index ? "flex" : "hidden"
                            }`}
                          >
                            <ul className=" flex flex-col gap-1.5">
                              {link.children.map((child, i) => (
                                <Link
                                  onClick={() => setPopup(-1)}
                                  style={{ textDecoration: "none" }}
                                  href={child.link}
                                  className="dropdown-link mb-2"
                                  key={i + "child"}
                                >
                                  <p className="text-gray-400 hover:text-blue-400 w-full">
                                    {child.name}
                                  </p>
                                </Link>
                              ))}
                            </ul>
                          </div>
                        </div> */}