"use client";

import Link from "next/link";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const error = ({ error, reset }) => {
  return (
    <>

<Navbar/>
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-6">{error.message}</h1>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
            onclick={()=>reset}
          >
            Try Again
          </button>
          <Link href={"/"}>
            <button className="bg-green-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default error;
