'use client'
import { useState } from "react"

export default function ProjectDetails () {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    } ;

    return (
        <>
        <button className="px-1 mt-1 bg-black text-lg font-bold hover:bg-white hover:text-purple-700"
        onClick={toggleDetails}>
            {isExpanded ? "Show Less" : "Show More"}
        </button>
        {isExpanded && (
       <div className="pt-4">
         <ul className="mt-2"><span className="font-bold bg-purple-700 text-lg sm:text-xl">Tech Stack</span>
            <li className="mt-2 text-lg sm:text-lg"><span className="font-bold underline">Frontend:</span> React, Next.js, Tailwind CSS</li>
            <li className="my-1 text-lg sm:text-lg"><span className="font-bold underline">Backend:</span> Node.js, Next.js API Routes (currently serving demo data, structured for MySQL integration)</li>
            <li className="my-1 text-lg sm:text-lg"><span className="font-bold underline">Database:</span> MySQL (schemas and query logic included in repo; previously connected to a self-hosted instance, pending deployment to hosted service)</li>
            <li className="text-lg sm:text-lg"><span className="font-bold underline">Auth:</span> JWT & cookie-based authentication</li>
            <li className="mt-1 text-lg sm:text-lg"><span className="font-bold underline">Hosting:</span> Vercel</li>
          </ul><br/>

          <ul><span className="pr-1 font-bold bg-purple-700 text-lg sm:text-xl">Core Features</span>
          <p className="mt-1 mb-2 italic text-purple-200 text-base font-semibold">
            * All features are tested, fully functional, and available in the full version of the app.
          </p>

            <li className="text-lg sm:text-lg"><span className="font-bold underline">Bracket Creator:</span> Submit predictions for 67 games and track progress throughout the tournament.</li>
            <li className="my-1 text-lg sm:text-lg"><span className="font-bold underline">Scoring System:</span> Real-time scoring wth round-based multipliers and bonus points.</li>
            <li className="my-1 text-lg sm:text-lg"><span className="font-bold underline">User Accounts:</span> Secure signup/login and the ability to create multiple brackets per user.</li>
            <li className="my-1 text-lg sm:text-lg"><span className="font-bold underline">Pool Admin Controls:</span> Any user who creates a private pool challenge becomes it&#39;s admin. Admins can manage their pool by inviting or removing members, giving them full control of their custom competition.</li>
             <li className="text-lg sm:text-lg"><span className="font-bold underline">Responsive Design:</span> Optimized across mobile, tablet, and desktop.</li>
          </ul><br/>

          <span className="pr-1 font-bold bg-purple-700 text-lg sm:text-xl">My Role</span>
            <ul className="list-disc mt-2 pl-5 text-lg sm:text-lg">
              <li>Led <strong>end-to-end development</strong> of Bracket Madness as a solo developer</li>
              <li className="my-1"><strong>Designed and built</strong> the frontend UX</li>
              <li><strong>Implemented</strong> backend architecture and data handling</li>
              <li className="my-1">Crafted design and interactions based on research, inspiration, and user needs</li>
            </ul>
          <br/>
          </div>
           )}
        </>

    )
}