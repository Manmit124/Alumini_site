"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  HiBeaker,
  HiBookmarkAlt,
  HiCamera,
  HiOutlineX,
  HiUser,
} from "react-icons/hi";
// import Logo from "../../../public/logo.png";

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);
  const data = [
    {
      title: "About",
      href: "/about",
      icon: HiUser,
    },
    {
      title: "Projects",
      href: "/projects",
      icon: HiBeaker,
    },
    {
      title: "Blog",
      href: "/blog",
      icon: HiBookmarkAlt,
    },
    {
      title: "Photos",
      href: "/photos",
      icon: HiCamera,
    },
  ];

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
    <div  className=" flex justify-between ">
    <Link href="/" onClick={onToggleNav} className=" flex flex-row  items-center justify-center md:hidden">
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            className=" "
            alt="logo of company Quilex"
          />
           <span className=" text-2xl  ml-[-10px]  font-bold">uilex</span>
          </Link>
    
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg   rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl text-slate-200" />
      </button>
      </div>
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)]  bg-white    ${
          navShow ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mt-6 px-8">
          <Link href="/" onClick={onToggleNav}>
            {/* <Image src={Logo} width={35} height={35} alt="logo" /> */}
            <h1 className=" text-slate-400">MT</h1>
          </Link>

          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
              !navShow ? "-rotate-[360deg]" : null
            }`}
          >
            <HiOutlineX className="text-xl text-slate-100 " />
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {data.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-center gap-x-2 font-incognito font-semibold text-lg dark:shadow-line-dark shadow-line-light p-6 group"
              onClick={onToggleNav}
            >
              <link.icon
                className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                aria-hidden="true"
              />
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}