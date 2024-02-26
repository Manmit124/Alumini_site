"use client"
import React from 'react';
import { RxPinTop } from 'react-icons/rx';

function BackToTopButton() {

    

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <button onClick={scrollUp} className={` border shadow-lg bg-opacity-70 z-50 border-gray-700  w-10 h-10 text-3xl text-gray-100  bg-gray-800 rounded-full flex items-center justify-center transition-all delay-75 ease-in-out`} >
                <RxPinTop size={16} />
            </button>
        </div>
    )
}

export default BackToTopButton;