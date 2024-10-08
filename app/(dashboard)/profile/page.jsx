"use client";

import UserCard from "@/app/_components/profile/UserCard";
import UserProfilePage from "@/app/_components/profile/UserProfilePage";
import { Button } from "@/components/ui/button";
import Userprofile from "@/hooks/userProfile";
import { ImProfile } from "react-icons/im";
import { BsFillArrowUpRightCircleFill, BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import Link from "next/link";
import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Navbar from "@/app/_components/Navbar";

const Page = () => {
  return (
    <>
      <div className="  w-11/12  mx-auto max-w-8xl min-h-screen flex justify-center items-center">
        <div className=" flex  ">
          {/* <h1 className="pb-4 normal-case text-[#F0ECE5]">Hey,{data.username}👋</h1> */}
          <Suspense
            fallback={
              <h1 className=" mx-auto min-h-screen flex justify-center items-center text-red-900">
                Loading ...
              </h1>
            }
          >
            <UserCard />
          </Suspense>

          {/* <div className=" flex flex-row flex-wrap items-center justify-evenly">
         

          <div>
            <Card className="w-[380px] h-[10rem] border-[#D1E5F4] border-2 shadow-[8px_8px_0px_#D1E5F4] rounded-xl bg-transparent pb-2">

              <CardContent className="  gap-4  text-white  flex flex-row  ">
              <span className=" text-white text-2xl ">  Works Hard like Every waking Hour</span>
              <Link href={"/profile/edit"}>
                

                <IoSettingsOutline className=" mb-2  text-4xl text-white" />
              </Link>
              </CardContent>
            </Card>
          </div>

    
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Page;
