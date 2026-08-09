import CaseStudySection from "./CaseStudySection";

export default function FutureRoadmap() {
  return (
        <CaseStudySection
            id="future-roadmap"
            title="Future Roadmap"
          >
              <div className="space-y-16">

              <p className="max-w-3xl">
                While Off Tape is a complete and functional product, it was intentionally
                designed with room to evolve. Future development will focus on improving
                content discovery, expanding editorial tools, and creating workflows
                that can support a growing collection of stories.
              </p>


              <div>
                <h3 className="font-serif text-2xl md:text-3xl">
                  Improving Content Discovery
                </h3>

                <p className="mt-5 max-w-3xl">
                  The recommendation architecture was designed to support
                  embedding-based retrieval as the content library grows. Future
                  development would introduce embeddings and vector search to improve
                  semantic understanding and uncover deeper connections between stories.
                </p>

                <p className="mt-5 max-w-3xl">
                  The goal is not simply greater recommendation accuracy, but helping
                  users uncover meaningful connections while preserving the editorial
                  context behind each recommendation.
                </p>
              </div>


              <div>
                <h3 className="font-serif text-2xl md:text-3xl">
                  Building AI-Assisted Editorial Workflows
                </h3>

                <p className="mt-5 max-w-3xl">
                  Future editorial tools could use AI to assist with identifying
                  potential stories, generating initial descriptions, suggesting tags
                  and collections, and organizing content before publication. The goal
                  is to reduce repetitive administrative work while keeping editorial
                  judgment with the human operator.
                </p>

                <p className="mt-5 max-w-3xl">
                  This approach would allow Off Tape to scale its curation process
                  without treating AI as a replacement for editorial decision-making.
                </p>
              </div>


              <div>
                <h3 className="font-serif text-2xl md:text-3xl">
                  Designing for Long-Term Sustainability
                </h3>

                <p className="mt-5 max-w-3xl">
                  The long-term goal is to create a discovery platform that can grow
                  without losing its original purpose. The architecture and CMS were
                  designed to support new tools and workflows while keeping the platform
                  manageable for the people operating it.
                </p>

                <p className="mt-5 max-w-3xl">
                  Rather than expanding through unrelated features, future development
                  will remain focused on helping fans discover and explore meaningful
                  stories while making the platform increasingly efficient to operate.
                </p>
              </div>

            </div>
            
        </CaseStudySection>

  );
}