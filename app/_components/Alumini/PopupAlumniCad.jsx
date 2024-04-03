import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaTwitter,
} from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { FiX } from "react-icons/fi";

const PopupAlumniCad = ({ person, close }) => {
  return (
    <div className="fixed z-[25] inset-0 bg-black bg-opacity-30 backdrop-blur-sm w-full flex justify-center items-center">
      <div className="flex  lg:w-[32rem] md:w-[28rem] w-full mx-6 flex-col gap-3 p-6 py-6 bg-black border border-gray-900 max-w-lg rounded-2xl relative shadow-lg">
        <button className="absolute top-6 right-6" onClick={close}>
          <FiX size={24} className="hover:scale-105 transition text-gray-400" />
        </button>
        <div className="lg:w-24 bg-cover    flex items-center justify-center md:w-20 w-16 lg:h-24 md:h-20 h-16 rounded-full overflow-hidden">
          <Image
            id={person.$id}
            className="w-full object-cover lg:h-24 md:h-20 h-16"
            src={person.image ? person?.image : "/profile/placeholder.png"}
            alt={person.FullName}
            loading="lazy"
            width={100}
            height={120}
           
          />
        </div>

        <div className="text-sm font-medium flex-1">
          <p className="text-xl font-bold text-sky-500">{person.FullName}</p>
          <p className="font-medium text-base text-gray-300">
            {person.Branch} ({person.Degree})
          </p>

          <div className="flex gap-3 items-center">
            {person.linkedin && (
              <Link to={person.linkedin} target="_blank">
                <FaLinkedin
                  size={20}
                  className="hover:scale-95 transition hover:text-gray-400"
                />
              </Link>
            )}

            {person.facebook && (
              <Link to={person.facebook} target="_blank">
                <FaFacebook
                  size={20}
                  className="hover:scale-105 transition hover:text-gray-400"
                />
              </Link>
            )}

            {person.github && (
              <Link to={person.github} target="_blank">
                <FaGithub
                  size={20}
                  className="hover:scale-105 transition hover:text-gray-400"
                />
              </Link>
            )}

            {person.instagram && (
              <Link to={person.instagram} target="_blank">
                <FaInstagram
                  size={20}
                  className="hover:scale-105 transition hover:text-gray-400"
                />
              </Link>
            )}

            {person.twitter && (
              <Link to={person.twitter} target="_blank">
                <FaTwitter
                  size={20}
                  className="hover:scale-105 transition hover:text-gray-400"
                />
              </Link>
            )}

            {person.website && (
              <Link to={person.website} target="_blank">
                <FaGlobe
                  size={20}
                  className="hover:scale-105 transition hover:text-gray-400"
                />
              </Link>
            )}
          </div>

          <p className="font-medium text-sm text-gray-300 py-2">
            {person.bio ? person.bio : person.work_info}
          </p>

          {person.GraduationYear && (
            <p className=" text-white">
              <span className="text-gray-400">Graduation Year:</span>{" "}
             {person.GraduationYear}
            </p>
          )}
          {person.Company && (
            <p className=" text-white">
              <span className="text-gray-400">Company:</span> {person.Company}
            </p>
          )}
          {person.designation && (
            <p className=" text-white">
              <span className="text-gray-400">Designation:</span>{" "}
              {person.designation}
            </p>
          )}

          {person.MobileNumber && (
            <p className="  text-white">
              <span className="text-gray-400">Phone:</span>{" "}
              <a
                target="_blank"
                className="text-sky-500"
                href={`tel:${person.MobileNumber}`}
              >
                {person.MobileNumber}
              </a>
            </p>
          )}

          {person.email && (
            <p>
              <span className="text-gray-400">Email_Id:</span>{" "}
              <a
                target="_blank"
                className="text-sky-500"
                href={`mailto:${person.email}`}
              >
                {person.email}
              </a>
            </p>
          )}

          {person.interests && (
            <p>
              <span className="text-gray-400">Interests:</span>{" "}
              {person.interests}
            </p>
          )}
          <div
              className={`pt-8 flex justify-center gap-3 ${
                person.social ? "" : "hidden"
              }`}
            >
              {person.social?.linkedin && (
                <a
                  href={person.social?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={30} color="white" />
                </a>
              )}

              {person.social?.instagram && (
                <a
                  href={person.social?.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={30} color="white" />
                </a>
              )}
              {person.social?.twitter && (
                <a href={person.social?.twitter} target="_blank" rel="noreferrer">
                  <FaXTwitter size={30} color="white" />
                </a>
              )}
              {person.social?.website && (
                <a href={person.social?.website} target="_blank" rel="noreferrer">
                  <FaGlobe className=" hover:bg-green-500" size={30} color="white" />
                </a>
              )}
            </div>
          
          {/* {person.hobbies.length !== 0 && (
            <p>
              <span className="text-gray-400">Interests:</span>{" "}
              {person.hobbies.join(", ")}
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PopupAlumniCad;
