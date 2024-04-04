"use client";
import CardAlumni from "@/app/_components/Card";
import Userprofile from "@/hooks/userProfile";
import { SparklesIcon } from "lucide-react";
import { Committee } from "@/config/config";
import React from "react";

const Page = () => {
  return (
    <div className="   mx-auto justify-center flex items-center flex-col mt-3 gap-8  ">
      <div>
        {/* <h1 className="  text-white">Executive Commitee</h1> */}
        <div
          // variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mt-16"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          <h1 className="Welcome-text  text-2xl">
            Executive Committee of Alumni Association
          </h1>
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
        </div>
      </div>
      <div className=" grid grid-cols-2 mb-5  pl-2  gap-8">
        {Committee.map((data, index) => (
          <div key={index}>
            <CardAlumni Alumini={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
