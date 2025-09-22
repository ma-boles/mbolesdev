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
         <ul><span className="pr-1 mt-1 font-bold bg-purple-700 text-lg sm:text-xl">Tech Stack</span>
            <li className="text-lg sm:text-lg"><span className="font-bold">Frontend:</span> React, Next.js, Tailwind CSS</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Backend:</span> Node.js, Next.js API Routes, MySQL</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Auth:</span> JWT & cookie-based authentication</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Hosting:</span> Vercel</li>
          </ul><br/>

          <ul><span className="pr-1 font-bold bg-purple-700 text-lg sm:text-xl">Core Features</span>
            <li className="text-lg sm:text-lg"><span className="font-bold">Bracket Creator:</span> Submit predictions for 67 games and track progress throughout the tournament.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Scoring System:</span> Real-time scoring wth round-based multipliers and bonus points.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">User Accounts:</span> Secure signup/login and the ability to create multiple brackets per user.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Pool Admin Controls:</span> Any user who creates a private pool challenge becomes it&#39;s admin. Admins can manage their pool by inviting or removing members, giving them full control of their custom competition.</li>
             <li className="text-lg sm:text-lg"><span className="font-bold">Responsive Design:</span> Optimized across mobile, tablet, and desktop.</li>
          </ul><br/>

          <span className="pr-1 font-bold bg-purple-700 text-lg sm:text-xl">My Role</span>
            <p className="text-lg sm:text-lg"> I led end-to-end development as a solo developer, from initial concept to frontend UX and backend architecture. The user experience and design were built from scratch based on research, inspiration, and intuition — without the use of formal wireframing tools.</p>
          <br/>
          </div>
           )}
        </>

    )
}

{/* <div className="pt-4">
        <ul><span className="font-bold text-green-400 text-lg sm:text-xl">Features</span>
            <li className="text-lg sm:text-lg"><span className="font-bold">Customizable Timer</span>: Set personalized Flow and Rest intervals to sustain productivity.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Spotify Integration:</span> Play different audio during Flow and Rest periods, creating an engaging and balanced workflow.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Multiple Cycles:</span> Manage multiple Flow/Rest cycles with real-time tracking to maintain a consistent rhythm.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">User Profiles:</span> Build personalized profiles for saving settings and favorite playlists.</li>
          </ul><br/>

          <ul><span className="font-bold text-green-400 text-lg sm:text-xl">Tech Stack</span>
            <li className="text-lg sm:text-lg"><span className="font-bold">Languages & Frameworks:</span> JavaScript, React, Next.js, Tailwind CSS</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">APIs:</span> Spotify Web Playback SDK</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Database:</span> MongoDB</li>
          </ul><br/>

          <ul><span className="font-bold text-green-400 text-lg sm:text-xl">Tools</span>
            <li className="text-lg sm:text-lg"><span className="font-bold">Version Control:</span> Git</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Deployment:</span> Vercel</li>
          </ul><br/>

          <ul><span className="font-bold text-green-400 text-lg sm:text-xl">In Progress</span>
            <li className="text-lg sm:text-lg"><span className="font-bold">Shuffle Feature:</span> Adding functionality to prevent track repetition during cycles.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">Customizable Templates:</span> Allowing users to create and save custom templates for easy setup with one click.</li>
          </ul><br/>

          <ul><span className="font-bold text-green-400 text-lg sm:text-xl">Future Enhancements</span>
            <li className="text-lg sm:text-lg"><span className="font-bold">Responsive Design:</span> Further optimization for both desktop and mobile devices.</li>
            <li className="text-lg sm:text-lg"><span className="font-bold">UI/UX Improvements:</span> Refining the interface for a smoother and more intuitive experience across devices.</li>
          </ul><br/>
          </div> */}