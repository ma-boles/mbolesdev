import React from "react";
import Link from "next/link";

export default function SmallNav({ className }) {
    return (
        <>
          <div /* nav buttons */ className={`flex mt-2 w-full bg-white bg-opacity-5 justify-evenly ${className}`}>
            <Link href="#about">
              <button className="flex-1 custom-nav  hover:bg-purple-800">About</button>
            </Link>
            <Link href="#works">
              <button className="flex-1 custom-nav hover:bg-purple-600">Works</button>
            </Link>
            <Link href="#contact">
              <button className="flex-1 custom-nav hover:bg-purple-500">Contact</button>
            </Link>
          </div>
        </>
    )
}