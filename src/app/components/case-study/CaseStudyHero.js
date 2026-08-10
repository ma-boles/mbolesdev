import Link from "next/link";
import CaseStudyMetadata from "./CaseStudyMetadata";
import CaseStudyVideo from "./CaseStudyVideo";

export default function CaseStudyHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
      <Link
        href="/"
        className="text-sm text-[#6B5B73] transition hover:text-[#1E1B1F]"
      >
        ← Back to Home
      </Link>

      <div className="mt-16">
        <p className="text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
          Case Study
        </p>

        <h1 className="mt-6 font-serif text-6xl leading-tight md:text-8xl">
          Off <span className="text-[#6B5B73]">Tape</span>
        </h1>

        <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-[#1E1B1F]">
          Designing a discovery platform that helps fans explore the people,
          history, and culture behind women&apos;s basketball.
        </p>
      </div>

      <CaseStudyMetadata
        role="Founding Engineer"
        timeline="2025 – 2026"
        responsibilities={[
          "Product Strategy",
          "UX/UI Design",
          "Full-Stack Development",
        ]}
        stack={[
          "Next.js",
          "TypeScript",
          "Supabase",
        ]}
        links={[
          {
            label: "Live Product",
            href: "https://gamestackr-hq.vercel.app/",
          },
          {
            label: "GitHub",
            href: "#",
          },
        ]}
      />
        
        <CaseStudyVideo 
          src="/video/Off Tape Homepage Vid 2.mp4"
          poster="/images/Off Tape Homepage Screen Shot.png"
          />

    </section>
  );
}