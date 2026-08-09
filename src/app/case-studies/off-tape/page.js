import CaseStudyHero from "@/app/components/case-study/CaseStudyHero";
import CaseStudySidebar from "@/app/components/case-study/CaseStudySidebar";
import Overview from "@/app/components/case-study/Overview";
import ProblemOpportunity from "@/app/components/case-study/ProblemOpportunity";
import ProductEvolution from "@/app/components/case-study/ProductEvolution";
import DiscoveryExperience from "@/app/components/case-study/DiscoveryExperience";
import TechnologyArchitecture from "@/app/components/case-study/TechnologyArchitecture";
import EngineeringChallenges from "@/app/components/case-study/EngineeringChallenges";
import TestingReliability from "@/app/components/case-study/TestingReliability";
import ResultsReflection from "@/app/components/case-study/ResultsReflection";
import FutureRoadmap from "@/app/components/case-study/FutureRoadmap";

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
 
          <Overview />
          <ProblemOpportunity />
          <ProductEvolution />
          <DiscoveryExperience />
          <TechnologyArchitecture />
          <EngineeringChallenges />
          <TestingReliability />
          <ResultsReflection />
          <FutureRoadmap />

        </article>
      </section>
    </main>
  );
}