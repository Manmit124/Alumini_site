"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import Experience from "./Experience";
import CreateExperience from "./CreateExperience";
import Userprofile from "@/hooks/userProfile";

const ShareExperience = () => {
  const searchParams = useSearchParams();
  const { data, loading } = Userprofile();

  const search = searchParams?.get("tab");

  // const [tab, settab] = useState();
  console.log(search);

  return (
    <div className="lg:px-9 px-4 flex flex-col mt-16">
      <h1 className="font-extrabold text-transparent lg:text-6xl md:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-blue-100  to-sky-600 large-heading ml-10">
        Share Experience
      </h1>

      <div className="  md:flex-row md:justify-between md:items-center gap-5">
        <div className=" border-b  mt-3 border-gray-800  w-fit flex gap-5 text-base">
          <button className={`font-medium border-b-2 p-2 b-2  border rounded-md text-white `}>
            Your Posted Experiences
          </button>
          <button className={`font-medium border-b-2 p-2  border rounded-md text-white `}>
            Post an Experiences
          </button>
        </div>
        <div>
          <Suspense>
            {/* <Experience /> */}
            <CreateExperience user={data} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ShareExperience;
