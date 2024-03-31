"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Branches } from "@/config/config";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Page = () => {
  const [Branch, setBranch] = useState(null);
  const [Aluminis, setAluminis] = useState([]);
  const [currentPopup, setCurrentPopup] = useState(null); // [id, type]

  useEffect(() => {
    fetchAlumini();
  }, []);
  const fetchAlumini = async () => {
    const response = await fetch("/api/users");
    const FetchAlumini = await response.json();
    console.log(FetchAlumini);
    setAluminis(FetchAlumini);
  };


  // const [searchParams, setSearchParams] = useSearchParams({
  //   role: null,
  //   page: 1,
  //   type: "name",
  //   search: "",
  // });
  // const searchparo = useSearchParams();

  // const role = searchparo.get("role") || null;

  return (
    <div className=" max-w-8xl mx-auto  justify-center  flex flex-col ">
      <div className=" flex  flex-col justify-center items-center  mt-28">
        <h1 className=" text-white text-2xl">Search Alumni </h1>
        <h5 className="lg:text-2xl md:text-xl text-lg font-bold pb-2">
          <span className=" text-white">
            Type:
          </span><span className="text-rose-500">role</span>
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

        <div className="   lg:px-10 md:p-8 p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

{Aluminis &&
  Aluminis?.map((Alumini,index) => (
    <>
      {/* <div key={index} className=" Alumini-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] gap-x-2  flex flex-row w-[20rem]  h-[8rem] mt-2 "> */}
      <div className="rounded-xl border hover:bg-[#101010] hover:border-gray-700 hover:border-l-sky-400  border-gray-900 cursor-pointer bg-[#000000] border-l-[#7042f88b] border-l-4 shadow-lg w-full">
<div className=" flex flex-row gap-5 hover:scale-95 transition p-4 py-6">

        <div className="  lg:w-20 bg-cover  flex items-center justify-center md:w-16 w-14 lg:h-20 md:h-16 h-14 rounded-full overflow-hidden">
          <Image
            width={100}
            height={120}
            alt="Users image"
            src={Alumini?.image}
            className="     w-full object-cover lg:h-20 md:h-16 h-14"
          />
        </div>
<div className=" text-sm font-medium flex-1">

        <div className=" flex flex-col ">
          <h1 className=" text-2xl text-white">{Alumini.FullName}</h1>
          <p className=" text-white">{Alumini.GraduationYear}</p>
          <p className=" text-white   text-sm t">
            {" "}
            Passionate Fullstack web developer is with great vision to
            change my life and world also
          </p>
        </div>
</div>
</div>
      </div>
    </>
  ))}
</div>
      </div>
    </div>
  );
};

export default Page;
