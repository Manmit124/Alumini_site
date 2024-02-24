"use client";
import Userprofile from "@/hooks/userProfile";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineFastBackward, AiOutlineShareAlt } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const UserCard = () => {
  const { data, loading } = Userprofile();
  const [showMore, setShowMore] = useState(false);
  const toggleBio = () => {
    setShowMore(!showMore);
  };
  const truncatedBio = showMore ? data.bio : data.bio?.slice(0, 150);

  return (
    <div className="rounded-2xl bg-eerie-black-2  shadow-md flex flex-col h-fit p-12 border border-jet   lg:w-[25rem]">
      <div className="flex w-full justify-center">
        <Image
          src={data.image}
          width={100}
          height={100}
          alt=""
          className="rounded-full  w-[90px] h-[90px]"
        />
      </div>

      <div className="flex flex-col items-center gap-[8px] p-0">
        <div>
          <h1 className="text-center text-3xl w-full  whitespace-normal  flex flex-row px-3   text-[#F0ECE5]">
            {data.FullName}
          </h1>
          <div className=" text-center">
            <div className="  bg-[#9ACD32] text-black  rounded-xl">
              Employee
            </div>
            {/* {role >= 4 && (
            <div className="badge bg-[#FFFF00] text-black mx-1">
              contributor
            </div>
          )}
          {role >= 5 && (
            <div className="badge bg-[#7DF9FF] text-black mx-1">admin</div>
          )} */}
          </div>
          <div className="skills text-center pt-2">
            {/* {skills.map((skill, index) => (
            <div key={index} className="badge bg-custom-blue text-black mx-1">
              {skill}
            </div>
          ))} */}
          </div>
        </div>
        <div>
          <p className=" text-white text-center">
            {truncatedBio}
            {data.bio?.length > 150 && (
              <>
                <p className=" text-white text-center">{data.bio}</p>
                <button
                  onClick={toggleBio}
                  className="text-blue-500 hover:underline"
                >
                  {showMore ? "...show less" : "...show more"}
                </button>
              </>
            )}
          </p>
        </div>
        {/* <div>
                  <AiFillGithub size='5vw' />
              </div> */}
      </div>

      <div className="flex flex-col w-full justify-center items-center">
        {/* {(isUserProfile || isUserDashboard) && ( */}
        {/* <button
          className="bg-blue-500 flex gap-1 w-fit items-center justify-center text-white px-4 py-2 rounded-full mt-4 hover:opacity-80"
        //   onClick={() =>
        //     // setShow(isUserProfile ? isUserProfile : isUserDashboard)
        //   }
        >
          <>
            <AiOutlineShareAlt />
            Share
          </>
        </button> */}
        {/* )} */}
        {/* user social icons */}
       

        {/* {!isUserProfile && !isUserDashboard && (
        <button className="bg-blue-500 flex gap-1 w-fit items-center justify-center text-white px-4 py-2 rounded-full mt-4 hover:opacity-80">
          <>
            <AiOutlineFastBackward />
            Back
          </>
        </button>
      )} */}
        {/* {isUserDashboard && ( */}
        <div
          className={`pt-8 flex justify-center gap-3 ${
            data.social ? "" : "hidden"
          }`}
        >
          {data.social?.linkedin && (
            <a href={data.social.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={30} color="white" />
            </a>
          )}
          {/* Add similar checks for Instagram and Facebook */}
          {data.social?.instagram && (
            <a href={data.social.instagram} target="_blank" rel="noreferrer">
              <FaInstagram size={30} color="white" />
            </a>
          )}
          {data.social?.twitter && (
            <a href={data.social.twitter} target="_blank" rel="noreferrer">
              <FaXTwitter size={30} color="white" />
            </a>
          )}
        </div>
        {/* )} */}
      </div>
      {/* {show && main_model} */}
    </div>
  );
};

export default UserCard;
