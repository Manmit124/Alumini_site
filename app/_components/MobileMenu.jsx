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
import { NavLinks } from "@/config/config";
import { MdKeyboardArrowDown } from "react-icons/md";
// import Logo from "../../../public/logo.png";

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);
  const [popup, setPopup] = useState(-1);

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
      <div className=" flex justify-between z-50   ">
        <Link
          href="/"
          onClick={onToggleNav}
          className=" flex flex-row   items-center justify-center md:hidden"
        >
          <Image
            src={"/logo.png"}
            width={50}
            height={50}
            className=" "
            alt="Alumni site of gcoec"
          />
          <span className=" text-2xl  ml-[-10px]  font-bold">Nexus</span>
        </Link>

        <button
          aria-label="Toggle Menu"
          onClick={onToggleNav}
          className="md:hidden  z-10  rounded-md p-2"
        >
          <RxHamburgerMenu className="text-xl text-slate-200" />
        </button>
      </div>
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)]   bg-black   ${
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
            className={`md:hidden  border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
              !navShow ? "-rotate-[360deg]" : null
            }`}
          >
            <HiOutlineX className="text-xl text-slate-100 " />
          </button>
        </div>
        <nav className="flex flex-col mt-6">
          {NavLinks.map((link, index) => {
            if (link.children) {
              return (
                <>
                  <div className=" mt-1 px-4">
                    <button
                      onClick={() => setPopup(popup === index ? null : index)}
                      className=" flex flex-row items-center px-4 py-3    text-gray-400  hover:text-blue-400"
                    >
                      {link.name}
                      {link.children && (
                        <MdKeyboardArrowDown
                          className={`${
                            popup === index ? "transform rotate-180" : ""
                          }`}
                          size={24}
                        />
                      )}
                    </button>
                    <div>
                      {link.children && popup === index && (
                        <div>
                          <ul className=" flex flex-col gap-1.5">
                            {link.children.map((child, i) => (
                              <Link key={i + "child"} href={child.link}>
                                <p
                                  onClick={() => {
                                    setPopup(null);
                                    setNavShow(false);
                                  }}
                                  className=" block px-4 py-2 hover:text-gray-400 text-blue-400 "
                                >
                                  {child.name}
                                </p>
                                <div className="w-[90%]  bg-gray-800 h-[1px]"></div>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <div className=" px-8">
                  <Link
                    onClick={() => {
                      setNavShow(false);
                    }}
                    key={index + "other"}
                    style={{ textDecoration: "none" }}
                    href={link.link}
                    className=" text-gray-400 hover:text-blue-400 "
                  >
                    {link.name}
                  </Link>
                </div>
              );
            }
          })}
        </nav>
      </div>
    </>
  );
}
