import React from "react";
import Link from "next/link";

export default function SmallNav({ className }) {
    return (
        <>
          <div /* nav buttons */ role="navigation" className={`flex mt-2 w-full bg-white bg-opacity-5 justify-between ${className}`} data-testid="small-nav">
            <Link href="#about" className="flex-1">
              <button className="custom-nav w-full
              hover:bg-gray-700 text-center
              dark:hover:bg-purple-600
              ">About</button>
            </Link>
            <Link href="#works" className="flex-1">
              <button className="custom-nav w-full
              hover:bg-gray-700 text-center
              dark:hover:bg-purple-600">Works</button>
            </Link>
            <Link href="#contact" className="flex-1">
              <button className="custom-nav w-full
              hover:bg-gray-700 text-center
              dark:hover:bg-purple-600">Contact</button>
            </Link>
          </div>
        </>
    )
}