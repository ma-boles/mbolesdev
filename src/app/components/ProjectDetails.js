'use client'
import { useState } from "react"

export default function ProjectDetails () {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    } ;

    return (
        <>
        <button className="pt-1 text-green-500 text-lg font-bold hover:border-b border-white"
        onClick={toggleDetails}>
            {isExpanded ? "Show Less" : "Show More"}
        </button>
        {isExpanded && (
       <div className="pt-4">
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
          </div>
           )}
        </>

    )
}