"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Userprofile from "@/hooks/userProfile";
import { useSession } from "next-auth/react";

const ImageSlider = () => {
  // const [user, setuser] = useState();

  const { data, loading } = Userprofile();
  const session = useSession();
  const userData = session.data?.user;
  const { status } = session;

  console.log(data);
  const slideImages = [
    {
      url: "/college.jpg",
    },
  ];
  const spanStyle = {
    fontSize: "20px",
    background: "#efefef",
    color: "#fff",
  };
  return (
    <div>
      <div>
        {/* <div className="flex w-full items-center justify-center h-440 bg-cover bg-center" style={{backgroundImage: `url(${image.url})`}}> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "450px",
            backgroundSize: "cover",
            backgroundPosition: "2% 5%",
            backgroundImage: "url('/college.jpg')",
          }}
        >
          <span style={{ spanStyle }}>
            <div
              data-aos="fade-right"
              className="absolute h-[450px]    w-full inset-0 text-left pt-32 lg:pl-24 md:pl-16 pl-8 bg-gradient-to-r  from-[rgb(8,8,8)] via-[rgba(0,0,0,0.56)] to-transparent"
            >
              <h5 className="lg:text-4xl md:text-3xl text-2xl font-bold pb-2">
                <span className="text-sky-500">Empower.</span>{" "}
                <span className=" text-purple-600">Iginte. Embrace.</span>
              </h5>
              <p className="lg:text-7xl md:text-6xl text-4xl font-bold text-white ">
                WELCOME BACK
              </p>
              <p className="lg:text-xl text-lg pb-5 pt-2 text-gray-300">
                Register now and become a member of <br /> Alumni Association of
                GCOEC Chandrapur.
              </p>
              {status === "authenticated" ? (
                <Link href="/dashboard">
                  <button className="px-5 py-2.5 bg-sky-500 text-white text-lg font-medium hover:scale-105 transition-all delay-75 rounded-xl ease-in hover:bg-sky-600">
                    Dashboard
                  </button>
                </Link>
              ) : (
                <Link href="/login">
                  <button className="px-5 py-2.5 bg-sky-500 text-white text-lg font-medium hover:scale-105 transition-all delay-75 rounded-xl ease-in hover:bg-sky-600">
                    Sign-up
                  </button>
                </Link>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
