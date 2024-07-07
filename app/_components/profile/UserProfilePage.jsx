"use client";
import Userprofile from "@/hooks/userProfile";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const UserProfilePage = () => {
  const { data, isLoading } = Userprofile();
  return (
    <div className=" flex flex-row  gap-x-4  max-w-4xl mx-auto items-center  justify-between  ">
      <div>
        <Image
          width={300}
          height={400}
          className="  border-[#7042f88b]  object-cover border rounded-2xl"
          src={data.image}
        />
      </div>

      <div className="   max-w-3xl mx-auto ">
        <div className=" flex flex-col gap-y-4">
          <div className=" flex flex-row gap-x-4  ">
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              Name
            </span>
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              {data.FullName}
            </span>
          </div>
          <div className=" flex flex-row gap-x-4">
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              Graduation Year
            </span>
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              {data.GraduationYear}
            </span>
          </div>
          <div className=" flex flex-row gap-x-4">
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              Mobile No.
            </span>
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              {data.MobileNumber}
            </span>
          </div>
          <div className=" flex flex-row gap-x-4">
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              Degree
            </span>
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              {data.Degree}
            </span>
          </div>
          <div className=" flex flex-row gap-x-4">
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              Branch
            </span>
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              {data.Branch}
            </span>
          </div>
          <div className=" flex flex-row gap-x-4">
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              Branch
            </span>
            <span className="py-2 px-3 text-center  cursor-pointer rounded-lg  button-primary text-white">
              {data.Branch}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
