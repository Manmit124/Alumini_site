"use client";
import Userprofile from "@/hooks/userProfile";
import { Link } from "lucide-react";
import Error from "next/error";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [Aluminis, setAluminis] = useState([]);
  const { loading, data } = Userprofile();
  useEffect(() => {
    fetchAlumini();
  }, []);
  const fetchAlumini = async () => {
    const response = await fetch("/api/users");
    const FetchAlumini = await response.json();
    console.log(FetchAlumini);
    setAluminis(FetchAlumini);
    
  };

  return (
    <div className="mt-8   justify-center">
      <div className="lg:py-5 mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold text-white sm:text-6xl lg:my-3">
          Alumini&apos s
        </h1>
      </div>
<div className="   flex-row  justify-center gap-2 grid grid-rows-1 grid-cols-4 ml-6">

      {Aluminis &&
        Aluminis?.map((Alumini,index) => (
          <>
            <div key={index} className=" Alumini-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] gap-x-2  flex flex-row w-[20rem]  h-[8rem] mt-2 ">
              <div className="  rounded-full overflow-hidden">
                <Image
                  width={100}
                  height={120}
                  alt="Users image"
                  src={Alumini?.image}
                  className="    object-cover "
                />
              </div>
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
          </>
        ))}
</div>
    </div>
  );
};

export default Page;
