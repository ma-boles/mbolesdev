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
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Goal</h2>
          <p className="text-lg leading-relaxed">
            Launch a platform that gives women&apos;s basketball fans a dedicated space for fun, community-driven competition. Private pools and bracket play turn passive spectating into active engagement, while live results, custom scoring, and a seamless interactive experience keep play dynamic and social. By filling a clear gap in the DFS and online gaming space, the app empowers an underserved fan community to grow alongside the rising popularity of the sport.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Outcome</h2>
          <p className="text-lg leading-relaxed space-y-2">
            Bracket Madness launched as a fully functional full-stack app where users can create secure accounts, manage private pool challenges, and track their picks across all 67 games. The platform supports multiple brackets per user and runs on a dynamic scoring engine with round multipliers and bonus points. Together, these features deliver a polished, reliable experience that makes following women&apos;s basketball more interactive and community-driven.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Vision</h2>
          <p className="text-lg leading-relaxed">
            Bracket Madness is just the beginning. The vision is to build a hub where women&apos;s sports fans can connect, compete, and grow together, shaping the future of fan engagement. By supporting a wide range of fan types and fostering deeper connections, the platform aims to expand the audience, strengthen engagement, and amplify the visibility of women&apos;s sports.
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
