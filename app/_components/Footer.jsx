import footerConfig from "@/config/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackToTopButton from "./Home/BackToTopButton";


const Footer = () => {
  return (
    <div
      data-aos="fade-in"
      className="bg-[#09090b] text-sm w-[100%] mt-[10rem]"
    >
      <div className="mb-10 w-[90%] grid gap-2 md:gap-4 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-[auto] items-start justify-items-center">
        <div className="mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-1 md:order-1 lg:order-1">
          <Link href="/">
            <Image
              src="/Footerlogo.png"
            width={300}
            height={300}
              className="h-16 w-16 rounded-full self-center"
              
            />
          </Link>
         

          <p className="max-w-[17rem] py-3 text-base text-gray-200">
            Your premier gathering place for GCOEC
            Alumni, where memories converge and opportunities unfold
          </p>
        </div>
        {footerConfig.map((section, index) => (
          <div
            key={index}
            className="mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-2 md:order-2 lg:order-2"
          >
            <div className="flex items-center justify-start">
              <h1 className="font-extrabold text-2xl text-blue-700 mr-3">|</h1>
              <h1 className="text-lg font-semibold text-sky-500">
                {section.title}
              </h1>
            </div>
            {section.links && (
              <ul className="mt-4 flex flex-col gap-2 text-base">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className=" hover:text-blue-600">
                    <Link
                      style={{ color: "#aaa" }}
                      href={link.href}
                      target="_blank"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-10 w-[100%] md:w-[100%] lg:w-[100%] order-3 md:order-3 lg:order-3 text-base">
          <div className="flex items-center justify-start">
            <h1 className="font-extrabold text-2xl text-blue-700 mr-3">|</h1>
            <h1 className="text-lg font-semibold text-sky-500">Contact Us</h1>
          </div>
          <p className="max-w-[16rem] pt-4 text text-white">
          Lalpeth, Ballarshah Rd, opp. Government Engineering College, Chandrapur, Maharashtra 442507
          </p>
          <p className="pt-2 text-white">
            Ph :{" "}
            <a
              href="tel:06122371715"
              style={{ color: "#009bd6" }}
              className="text-blue-700 ml-2 font-semibold"
            >
              +91-88888888888
            </a>
          </p>
          <p className="pt-2 text-white">
            Mail :{" "}
            <a
              href="mailto:alumni@gcoec.ac.in"
              style={{ color: "#009bd6" }}
              className="text-blue-700 ml-2 font-semibold"
            >
              alumni@gcoec.ac.in
            </a>
          </p>
        </div>
      </div>


      <div className="w-[90%] m-[auto] bg-gray-800 h-[1px]"></div>
      <div className="m-[auto] py-7 text-gray-500 font-medium text-sm gap-4 flex flex-col md:flex-row lg:flex-row justify-between items-center w-[90%]">
        <p>GCOEC, All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          <span className="md:block hidden">Designed & Developed</span>{" "}
          <span className="md:hidden block">Designed</span>
          <span>
            by{" "}
            <Link
              style={{ color: "#009bd6" }}
              className="font-medium"
              href="/team"
            >
             Team Nexon(3rd yr CSE)
            </Link>
            .
          </span>
        </p>
      <BackToTopButton />
      </div>

</div>
  );
};

export default Footer;
