"use client";

import UserCard from "@/app/_components/profile/UserCard";
import UserProfilePage from "@/app/_components/profile/UserProfilePage";
import { Button } from "@/components/ui/button";
import Userprofile from "@/hooks/userProfile";
import { ImProfile } from "react-icons/im";
import { BsFillArrowUpRightCircleFill, BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Page = () => {
  const { loading, data } = Userprofile();

  return (
    <div className="max-phone:hidden w-11/12 mx-auto mt-4 max-w-8xl">
      <div className=" flex flex-row justify-between ">
        {/* <h1 className="pb-4 normal-case text-[#F0ECE5]">Hey,{data.username}👋</h1> */}
        <div className="  mt-20 ">
          <UserCard />
        </div>
        <div className=" flex flex-row flex-wrap items-center justify-evenly">
          {/* <div className=" w-96 bg-base-100 border-[#D1E5F4] border-2 shadow-[8px_8px_0px_#D1E5F4] rounded-xl my-4">
            <div className="card-body">
              <h2 className="card-title text-white ">
                account
                <div className="badge badge-secondary"></div>
              </h2>
              <p className=" text-white">
                Personalize your experience and manage preferences.
              </p>
              <div className="card-actions justify-end">
                <a href="/u/dashboard/account">
                  <button className="btn border-2 border-[#D1E5F4] shadow-[4px_4px_0px_#D1E5F4] hover:shadow-none hover:bg-[#D1E5F4] hover:text-[#000]">
                    <IoSettingsOutline className="  text-white" />
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          <div>
            <Card className="w-[380px] h-[10rem] border-[#D1E5F4] border-2 shadow-[8px_8px_0px_#D1E5F4] rounded-xl bg-transparent pb-2">
              <CardHeader>{/* {cardHeader}  */}</CardHeader>

              <CardContent className="  gap-4  text-white  flex flex-row  ">
              <span className=" text-white text-2xl ">  Works Hard like Every waking Hour</span>
                <IoSettingsOutline className=" mb-2  text-4xl text-white" />
              </CardContent>
              {/* <CardFooter className="  mb-2 flex justify-end"> <IoSettingsOutline className=" mb-2  text-2xl text-white" /></CardFooter> */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
