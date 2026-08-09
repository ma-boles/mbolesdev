import CaseStudySection from "./CaseStudySection";

export default function EngineeringChallenges() {
  return (
        <CaseStudySection
                id="engineering-challenges"
                title="Engineering Challenges"
              >
                  <div className="space-y-16">
    
                    <p className="max-w-3xl">
                      Developing Off Tape required solving several engineering challenges
                      around meaningful discovery, flexible editorial workflows, and a
                      technical foundation that could evolve alongside the product.
                    </p>
    
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl">
                        Building a Multi-Stage Recommendation Engine
                      </h3>
    
                      <p className="mt-5 max-w-3xl">
                        The challenge went beyond finding stories that shared similar tags or
                        featured the same players. Off Tape needed recommendations that felt
                        relevant while still encouraging users to explore new areas of the
                        sport. The system therefore needed to balance familiarity with
                        opportunities for broader discovery rather than reinforcing narrow
                        content patterns.
                      </p>
                    </div>
    
    
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl">
                        Designing a Flexible Content Model
                      </h3>
    
                      <p className="mt-5 max-w-3xl">
                        Off Tape curates articles, videos, podcasts, interviews, and
                        documentaries from a wide range of sources. I designed a story-based
                        content model that represents these different formats through a
                        consistent structure while keeping the platform flexible as new
                        sources and discovery experiences are introduced.
                      </p>
    
                      <p className="mt-5 max-w-3xl">
                        Each story contains shared metadata such as descriptions, tags,
                        categories, collections, and editorial status. Categories describe how
                        a story is consumed, such as Read, Watch, or Listen, while collections
                        organize stories around broader editorial themes. This allows a single
                        story to exist across multiple dimensions—for example, a podcast can
                        be categorized as Listen while also appearing in the Business
                        collection.
                      </p>
    
                      <p className="mt-5 max-w-3xl">
                        This structure also supports the CMS and provides a foundation for
                        future improvements without requiring fundamental changes to the
                        underlying content model.
                      </p>
                    </div>
    
    
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl">
                        Using Behavioral Signals
                      </h3>
    
                      <p className="mt-5 max-w-3xl">
                        Semantic similarity provides a strong foundation for discovering
                        related stories, but it does not account for how readers actually
                        interact with content. To complement content similarity, Off Tape
                        tracks impressions, internal clicks, and external clicks and
                        incorporates these signals into aggregated engagement metrics.
                      </p>
    
                      <p className="mt-5 max-w-3xl">
                        Personalization is not part of the initial MVP, but this behavioral
                        layer creates a foundation for refining recommendation quality,
                        identifying changing reader interests, and supporting more
                        personalized discovery as more interaction data becomes available.
                      </p>
                    </div>
    
                  </div>
                
        </CaseStudySection>
    
  );
}