"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Branches } from "@/config/config";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Page = () => {
  const [Branch, setBranch] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({
    role: null,
    page: 1,
    type: "name",
    search: "",
  });
  const searchparo = useSearchParams();

  const role = searchparo.get("role") || null;

  return (
    <div className=" max-w-8xl mx-auto  justify-center  flex flex-col ">
      <div className=" flex  flex-col justify-center items-center  mt-28">
        <h1 className=" text-white text-2xl">Search Alumni </h1>
        <h5 className="lg:text-2xl md:text-xl text-lg font-bold pb-2">
          <span className=" text-white">
            Type:
          </span><span className="text-rose-500">{role.toUpperCase()}</span>
        </h5>
        <div className="lg:w-[80%] w-full md:px-6 px-3 mt-5  m-auto relative flex md:gap-3 gap-2 items-center ">
          <div className=" flex-1 relative w-full">
            <Input className=" text-white bg-transparent w-full " />
          </div>
          <select className=" button-primary rounded-xl shadow-lg  border border-[#7042f861]  lg:px-4 md:px-4 px-2 md:py-2.5 py-2 font-normal text-gray-300">
            <option className=" bg-black    text-gray-300 " value="">
              Search By
            </option>
            <option
              className=" bg-black   text-gray-300 "
              lassName="button-primary   text-gray-300 "
              value="name"
            >
              Name
            </option>
            <option className=" bg-black   text-gray-300 " value="batch">
              Batch
            </option>
            <option className=" bg-black   text-gray-300 " value="company">
              Company
            </option>
            <option className=" bg-black   text-gray-300 " value="designation">
              Designation
            </option>
          </select>
          {/* <FiSearch className="absolute md:top-4 top-3 text-xl left-3.5 text-gray-400" /> */}
        </div>
        <div className="lg:max-w-3xl md:max-w-2xl w-full md:px-6 px-4 m-auto py-10 pt-5">
          <div className="flex flex-wrap items-center gap-3 justify-center pt-6">
            <Button
              onClick={() => {
                setBranch(null);
              }}
              className={`button-primary shadow-lg  border border-[#7042f861] ${
                Branch === null && "button-secondary"
              }`}
            >
              All
            </Button>
            {Branches.map((dept, index) => (
              <Button
                key={index}
                onClick={() => {
                  setBranch(dept.value);
                }}
                className={`button-primary shadow-lg  border border-[#7042f861] ${
                  Branch === dept.value && "button-secondary"
                }`}
              >
                {dept.value}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
