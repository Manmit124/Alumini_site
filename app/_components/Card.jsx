"use client";
import Image from "next/image";
import React from "react";

const CardAlumni = ({ Alumini }) => {
  return (
    <div>
      <div
        key={Alumini?._id}
        className="rounded-xl border hover:bg-[#101010] hover:border-gray-700 hover:border-l-sky-400  border-gray-900 cursor-pointer bg-[#000000] border-l-[#7042f88b] border-l-4 shadow-lg w-full"
      >
        <div className=" flex flex-row gap-5 hover:scale-95 transition p-4 py-6">
          <div className="  lg:w-20 bg-cover  flex items-center justify-center md:w-16 w-14 lg:h-20 md:h-16 h-14 rounded-full overflow-hidden">
            <Image
              width={100}
              height={120}
              alt="Users image"
              loading="lazy"
              src={Alumini?.image ? Alumini?.image :"/profile/placeholder.png"}
              className="     w-full object-cover lg:h-20 md:h-16 h-14 "
            />
          </div>
          <div className=" text-sm font-medium flex-1">
            <div className=" flex flex-col  mt-2">
              <h1 className=" text-2xl text-sky-500">{Alumini?.name}</h1>

              {Alumini?.Role && (
                <p className=" text-green-500">
                  <span className="  text-gray-400">Role:</span>
                  {Alumini?.Role}
                </p>
              )}
              {Alumini?.Designation && (
                <p className=" text-white">
                  <span className="  text-gray-400">Designation</span>
                  {Alumini?.Designation}
                </p>
              )}
              {Alumini.Experience && (
                <p className=" text-white">
                  <span className="text-gray-400">Experience:</span>{" "}
                  {Alumini?.Experience}
                </p>
              )}
              {Alumini.email && (
                <p className=" text-white">
                  <span className="text-gray-400">Email:</span>{" "}
                  <a
                    target="_blank"
                    className="text-sky-500"
                    href={`mailto:${Alumini?.email}`}
                  >
                    {Alumini?.email}
                  </a>
                </p>
              )}

              {/* <p className=" text-white   text-sm t">
                          {" "}
                          Passionate Fullstack web developer is with great
                          vision to change my life and world also
                        </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAlumni;
