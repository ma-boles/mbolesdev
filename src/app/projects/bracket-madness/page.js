import Link from "next/link";

export default function BracketMadnessCaseStudy() {
  return (
        <div className="min-h-screen bg-gradient-to-br from-pink-900 via-zinc-900 to-purple-950 flex justify-center py-16 px-4">
  <div className="max-w-4xl w-full bg-black/30 text-white rounded-3xl shadow-xl p-10 space-y-8">

        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            Case Study
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-center"><span className="font-extrabold">Bracket</span>
         Madness
        </h2>
        

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Problem</h2>
          <p className="text-lg leading-relaxed">
            The idea for Bracket Madness started with a frustrating experience in a major bracket challenge app. The interface forced users into a rigid step-by-step flow, making it difficult to navigate between rounds and regions. Users also lacked flexible, community-focused ways to engage, leaving a gap in the market for a platform that serves this growing but underserved fan community.
          </p>
          {/* <p className="text-lg leading-relaxed">
            Bracket Madness was built to solve that with a more flexible, user-first interface. Mobile users get visual cues like dot indicators to show missing picks by round, while tablet and desktop users see color-coded game slots to help them track progress and stay oriented. A visible pick counter keeps users aware of how close they are to completion, removing friction from the process.
          </p> */}
          {/* <p className="text-lg leading-relaxed">
            Beyond the UX improvements, the app introduces private pools as a central feature. Instead of competing anonymously in a sea of millions, users can create invite-only challenges with coworkers, friends, or family — making it easy to track who&apos;s winning in a familiar group. It brings back the social energy of office pools, but with modern design and seamless digital tools.
          </p> */}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Goal</h2>
          <p className="text-lg leading-relaxed">
            Create a platform that lets users compete individually or in groups in a flexible, engaging bracket-based game, while amplifying visibility for women&apos;s sports. The app features a custom scoring system, automatically updated game results, and a dynamic user experience designed to make competition intuitive and social.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Outcome</h2>
          <p className="text-lg leading-relaxed space-y-2">
              The app allows users to create secure accounts, join or manage private pool challenges, and track performance across 67 games. It supports multiple brackets per user and uses a dynamic scoring engine with round multipliers and bonus points.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Vision</h2>
          <p className="text-lg leading-relaxed">
            Bracket Madness is just the beginning. While the MVP focuses on college basketball, the broader vision is to create a fan engagement platform centered on women&apos;s sports, spanning multiple leagues and competition formats. The platform is designed to support a wide range of fan types — from casual followers to die-hard enthusiasts — through features like dynamic challenges, in-app currency, and a community-driven social experience. Currently in stealth mode, the project aims to contribute to the growth of women&apos;s sports by introducing new, interactive ways for fans to connect with the game and with each other.
          </p>
        </section>

        <div className="flex justify-center">
            <Link
                href="/"
                className="inline-block px-6 py-3 mx-1 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition ml-4">
                Back to Portfolio
            </Link>

            <a
                href="https://bracket-madness.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mx-1 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
            >
                View Live Demo
            </a>
        </div>

      </div>
      
    </div>
  );
}
