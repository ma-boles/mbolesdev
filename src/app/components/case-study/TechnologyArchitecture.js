import CaseStudySection from "./CaseStudySection";

export default function TechnologyArchitecture() {
  return (
        <CaseStudySection
                id="technology-architecture"
                title="Technology Architecture"
              >
                  <div className="space-y-16">
    
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">
                      Technology Stack
                    </h3>
    
                    <p className="mt-5 max-w-3xl">
                      As a solo developer, I prioritized a technology stack that supported
                      fast iteration without introducing unnecessary complexity. Next.js
                      provided the application framework, TypeScript improved reliability as
                      the codebase grew, and Supabase handled database, authentication, and
                      storage needs. Tailwind CSS provided a consistent foundation for the
                      interface.
                    </p>
                  </div>
    
    
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">
                      Application Architecture
                    </h3>
    
                    <p className="mt-5 max-w-3xl">
                      Off Tape is organized into three primary layers: the public-facing
                      application, an administrative dashboard for content management, and
                      a shared backend responsible for data storage, authentication, and
                      business logic.
                    </p>
    
                    <p className="mt-5 max-w-3xl">
                      Separating the public experience from the administrative interface
                      allowed each to serve a different purpose while keeping the underlying
                      systems shared and maintainable.
                    </p>
                  </div>
    
    
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">
                      Content Management System
                    </h3>
    
                    <p className="mt-5 max-w-3xl">
                      Because editorial expertise and software engineering are different
                      skill sets, I built a custom CMS that allows non-technical users to
                      manage the platform without interacting directly with the database or
                      application code.
                    </p>
    
                    <p className="mt-5 max-w-3xl">
                      The MVP supports the core editorial workflow, including adding and
                      editing stories, managing metadata, organizing content, saving drafts,
                      and updating or removing existing entries.
                    </p>
                  </div>
    
    
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">
                      Recommendation Architecture
                    </h3>
    
                    <p className="mt-5 max-w-3xl">
                      Recommendations appear after users engage with a story, providing a
                      natural next step for continued exploration. The pipeline generates a
                      candidate pool before ranking stories using multiple signals,
                      including semantic similarity, collection type, recency, and
                      engagement.
                    </p>
    
                    <p className="mt-5 max-w-3xl">
                      The system was designed to remain modular so ranking signals can be
                      adjusted as the platform evolves, while keeping recommendations aligned
                      with the broader editorial approach.
                    </p>
                  </div>
    
                </div>
                
        </CaseStudySection>
    
  );
}