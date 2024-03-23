"use client";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex  items-center justify-center px-20 mt-20 w-full "
    >
      <div className="   max-w-8xl flex  mt-4  gap-5 justify-center m-auto max  text-start">
        <div className=" flex flex-col justify-center items-center">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Welcome to GCOEC Chandrapur Alumni Website!
            </h1>
          </motion.div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Centralized hub for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Alumni{" "}
              </span>
              of GCOEC
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[900px]"
          >
            Government College of Engineering Chandrapur is established in 1996
            This is the only Government Institute under Gondwana University,
            Gadchiroli. This Government institute is completely funded by
            Government of Maharashtra. The Institute is under Director of
            Technical Education, M.S., Mumbai and is administered through its
            Regional office at Nagpur. Now a days, due to globalization there is
            stiff competition at the national & International level as well
            phenomenal growth in the technology. For this, competent technocrats
            & engineers are in great demand and to serve this requirement,
            Government College of Engineering,Chandrapur is taking efforts to
            produce high quality technocrats.
          </motion.p>
          {/* <Link href="https://www.gcoec.ac.in/gcoec/#" target="_blank"> */}

          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
          {/* </Link> */}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
