import React from "react";
import Link from "next/link";

export default function LargeNav({ className }) {
    return (
        <>
          <div /* nav buttons */ className={`hidden md:flex flex-col gap-2 my-4 mr-0 ${className}`} data-testid="large-nav">
          <Link href="#about">
              <button className="custom-button
              bg-gray-800
              border-gray-800
              hover:bg-gray-700
              rounded-lg shadow-[0_4px_10px_rgba(100,100,100,0.1)]
              dark:bg-purple-950 border-2
              dark:border-purple-950
              border-opacity-40
              dark:hover:bg-purple-800
              hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500
              ">About</button>
            </Link>
            <Link href="#works">
              <button className="custom-button
              bg-gray-700
              border-gray-700
              hover:bg-gray-500
                rounded-lg shadow-lg
              dark:bg-purple-700 border-2
              dark:border-purple-700
              dark:hover:bg-purple-600
              hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400">View Works</button>
            </Link>
            <Link href="#contact">
              <button className="custom-button
              border-2 border-white
              bg-black bg-opacity-40
              hover:bg-gray-500
              dark:hover:bg-purple-500
                rounded-lg shadow-lg
                hover:scale-105 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400"
                >Get In Touch</button>
            </Link>
          </div>
        </>
    )
}
