import React from "react";
import Link from "next/link";

export default function LargeNav({ className }) {
    return (
        <>
          <div /* nav buttons */ className={`hidden md:flex flex-col gap-2 m-4 ${className}`}>
          <Link href="#about">
              <button className="custom-button 
              bg-blue-800 
              border-blue-700
              hover:bg-blue-700
              dark:bg-purple-950 border-2
              dark:border-purple-900 
              border-opacity-40 
              dark:hover:bg-purple-800">About</button>
            </Link>
            <Link href="#works">
              <button className="custom-button 
              bg-blue-600 
              border-blue-600
              hover:bg-blue-500
              dark:bg-purple-700 border-2 
              dark:border-purple-700 
              dark:hover:bg-purple-600">View Works</button>
            </Link>
            <Link href="#contact">
              <button className="custom-button 
              border-2 border-white  
              hover:bg-blue-500
              dark:hover:bg-purple-500 ">Get In Touch</button>
            </Link>
          </div>
        </>
    )
}        {/*  <div /* nav buttons *//* className={`flex lg:flex-col gap-2 m-4 md:flex-col sm:flex-row`}>*/}
