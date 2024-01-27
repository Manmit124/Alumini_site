"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const status = session?.status;

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
                  onClick={()=>signOut({
                    callbackUrl: `${window.location.origin}/login`,
                  })}
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

export default Navbar;
