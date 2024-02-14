"use client";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full "
    >
      <div className=" h-full w-full flex  flex-col gap-5 justify-center m-auto  text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Welcome to Alumini-Nexus</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            User exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Our project aims to bridge this gap by creating 'Alumni Nexus, ' a
          platform where alumni can showcase their profiles platform where
          alumni can showcase their profiles
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <div className=" w-full h-2/4 md:h-full md:w-3/5  flex items-center justify-center">
        {/* <Image
        src={"/Home/ai.png"}
        width={500}
        height={500}
        className=" z-[-10] "
      /> */}
      </div>
    </motion.div>
  );
};

export default HeroContent;
