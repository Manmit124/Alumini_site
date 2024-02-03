"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import MobileMenu from "./MobileMenu";

const data = [
  {
    title: "About",
    href: "/about",
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
const Nav0bar = () => {
  return (
    <>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            {/* <Image src={Logo} width={35} height={35} alt="logo" /> */}
            <h1 className=" text-slate-400">Mannmit</h1>
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            {status === "authenticated" && (
              <>
                <h1 className=" text-white ">Manmit</h1>
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

            {/* <Theme /> */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
};

// export default Navbar;

const Navbar = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userImage = userData?.image;
  return (
    <>

<MobileMenu/>
    <div className="w-full lg:h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 hidden md:flex lg:flex ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href={"/"} className=" h-auto w-auto flex  flex-row items-center">
          <Image
            alt="logo"
            width={70}
            height={70}
            className=" cursor-pointer hover:animate-slowspin"
          />
          <span className=" font-bold ml-[10px] hidden md:block text-gray-300 ">
            Alumini-Nexus
          </span>
        </Link>
        <div className=" h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <ul className="flex items-center gap-x-10">
              {data.map((link, id) => (
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
                    src={userImage}
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
