// // app/case-studies/off-tape/page.js

// import Link from "next/link";

// export default function OffTapeCaseStudy() {
//   const sections = [
//     "Overview",
//     "Problem & Opportunity",
//     "Product Evolution",
//     "Designing the Discovery Experience",
//     "Technology Architecture",
//     "Engineering Challenges",
//     "Testing & Reliability",
//     "Results & Reflection",
//     "Future Roadmap",
//   ];

//   return (
//     <main className="min-h-screen bg-[#F4F0EA] text-[#1E1B1F]">
//       {/* Hero */}
//       <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
//         <Link
//           href="/"
//           className="text-sm text-[#6B5B73] transition hover:text-[#1E1B1F]"
//         >
//           ← Back to Home
//         </Link>

//         <div className="mt-16">
//           <p className="text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
//             Case Study
//           </p>

//           <h1 className="mt-6 font-serif text-6xl leading-tight md:text-8xl">
//             Off <span className="text-[#6B5B73]">Tape</span>
//           </h1>

//           <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-[#1E1B1F]">
//             Designing a discovery platform that helps fans explore the people,
//             history, and culture behind women&apos;s basketball.
//           </p>
//         </div>

//         {/* Project Metadata */}
//         <div className="mt-16 grid gap-10 border-t border-[#DDD7D0] pt-10 md:grid-cols-4">
//           <div>
//             <p className="text-sm uppercase tracking-wide text-[#8A7F8D]">
//               Role
//             </p>
//             <p className="mt-3 leading-relaxed">
//               Founding Engineer
//               <br />
//               Product Owner
//             </p>
//           </div>

//           <div>
//             <p className="text-sm uppercase tracking-wide text-[#8A7F8D]">
//               Timeline
//             </p>
//             <p className="mt-3">2025–2026</p>
//           </div>

//           <div>
//             <p className="text-sm uppercase tracking-wide text-[#8A7F8D]">
//               Stack
//             </p>
//             <p className="mt-3">
//               Next.js
//               <br />
//               TypeScript
//               <br />
//               Supabase
//             </p>
//           </div>

//           <div>
//             <p className="text-sm uppercase tracking-wide text-[#8A7F8D]">
//               Links
//             </p>

//             <div className="mt-3 flex flex-col gap-2">
//               <a
//                 href="#"
//                 className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
//               >
//                 Live Product →
//               </a>

//               <a
//                 href="#"
//                 className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
//               >
//                 GitHub →
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Hero Image Placeholder */}
//         <div className="mt-20 aspect-[16/9] rounded-sm bg-[#DDD7D0] flex items-center justify-center text-[#8A7F8D]">
//           Homepage Screenshot / Demo Video
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="mx-auto grid max-w-6xl gap-20 px-6 pb-32 lg:grid-cols-[240px_1fr]">
//         {/* Sidebar */}
//         <aside className="hidden lg:block">
//           <div className="sticky top-12">
//             <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
//               Contents
//             </p>

//             <nav className="space-y-4">
//               {sections.map((section) => (
//                 <a
//                   key={section}
//                   href="#"
//                   className="block text-[#6B6B6B] transition hover:text-[#1E1B1F]"
//                 >
//                   {section}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </aside>

//         {/* Article */}
//         <article className="space-y-32">
//           {sections.map((section) => (
//             <section
//               key={section}
//               className="border-t border-[#DDD7D0] pt-12"
//             >
//               <h2 className="font-serif text-4xl">{section}</h2>

//               <p className="mt-6 max-w-3xl leading-relaxed text-[#6B6B6B]">
//                 Content coming soon...
//               </p>
//             </section>
//           ))}
//         </article>
//       </section>
//     </main>
//   );
// }


import CaseStudyHero from "@/app/components/case-study/CaseStudyHero";
import CaseStudySidebar from "@/app/components/case-study/CaseStudySidebar";
import CaseStudySection from "@/app/components/case-study/CaseStudySection";

export default function OffTapeCaseStudy() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
    },
    {
      id: "problem-opportunity",
      title: "Problem & Opportunity",
    },
    {
      id: "product-evolution",
      title: "Product Evolution",
    },
    {
      id: "discovery-experience",
      title: "Designing the Discovery Experience",
    },
    {
      id: "technology-architecture",
      title: "Technology Architecture",
    },
    {
      id: "engineering-challenges",
      title: "Engineering Challenges",
    },
    {
      id: "testing-reliability",
      title: "Testing & Reliability",
    },
    {
      id: "results-reflection",
      title: "Results & Reflection",
    },
    {
      id: "future-roadmap",
      title: "Future Roadmap",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F0EA] text-[#1E1B1F]">
      {/* Hero */}
      <CaseStudyHero />

      {/* Content */}
      <section className="mx-auto grid max-w-6xl gap-20 px-6 pb-32 lg:grid-cols-[240px_1fr]">
        <CaseStudySidebar sections={sections} />

        <article className="space-y-32">
          {sections.map((section) => (
            <CaseStudySection
              key={section.id}
              id={section.id}
              title={section.title}
            >
              <p>
                Content coming soon...
              </p>
            </CaseStudySection>
          ))}
        </article>
      </section>
    </main>
  );
}