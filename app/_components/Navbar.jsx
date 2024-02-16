"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import MobileMenu from "./MobileMenu";
import Userprofile from "@/hooks/userProfile";

const Navlinks = [
  {
    title: "Alumini",
    href: "/Alumini",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Photos",
    href: "/photos",
  },
];


const Navbar = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userImage = userData?.image;
  const {loading,data}=Userprofile();

  
  return (
    <>

<MobileMenu/>
{/* shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  shadow-lg*/}
    <div className="w-full lg:h-[65px] fixed top-0   z-50 px-10 hidden md:flex lg:flex ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href={"/"} className=" h-auto w-auto flex  flex-row items-center">
        <div className=" mt-2">

          <Image
          src={"/logo.png"}
            alt="logo"
            width={90}
            height={90}
            className=" cursor-pointer  mt-3 "
          />
        </div>
          <span className=" font-bold hidden md:block text-gray-300 ">
            Alumini-Nexus
          </span>
        </Link>
        <div className=" h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <ul className="flex items-center gap-x-10">
              {Navlinks.map((link, id) => (
                <li key={id}>
                  <Link href={link.href} className="font-incognito">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex items-center gap-x-3">
          {status === "authenticated" && (
            <>
              <Link href={"/profile"} >
                <div>
                  <Image
                    src={data?.image}
                    height={35}
                    width={35}
                    alt="user image "
                    className=" rounded-xl "
                  />
                </div>
              </Link>
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: `${window.location.origin}/login`,
                  })
                }
              >
                Logout
              </Button>
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
