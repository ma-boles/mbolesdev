import CaseStudySection from "./CaseStudySection";
import CaseStudyImage from "./CaseStudyImage";
import Image from "next/image";

export default function DiscoveryExperience() {
  return (
        <CaseStudySection
                id="discovery-experience"
                title="Designing the Discovery Experience"          
              >
                <div className="space-y-16">
    
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    Creating an Intentional Discovery Journey
                  </h3>
    
                  <p className="mt-5 max-w-3xl">
                    The homepage was designed to provide multiple paths for exploration.
                    New visitors can browse recent stories, while users looking to explore
                    a particular aspect of the sport can dive directly into curated
                    collections. Rather than assuming every user has the same interests,
                    the experience supports different ways of discovering content.
                  </p>
                </div>

              <CaseStudyImage caption="Off Tape homepage">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="/images/Off Tape Homepage Screen Shot.png"
                        alt="Off Tape homepage"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 900px"
                      />
                    </div>
                  </CaseStudyImage>

                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    Organizing Content Around the Sport
                  </h3>
    
                  <p className="mt-5 max-w-3xl">
                    Content is organized into thematic collections that represent
                    different dimensions of women&apos;s basketball. Rather than relying
                    solely on recency or popularity, collections provide context around
                    the players, history, and growth of the sport.
                  </p>
                </div>

                <CaseStudyImage caption="Off Tape story page">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src="/images/Off Tape Story page.png"
                        alt="Off Tape story page"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 900px"
                      />
                    </div>
                  </CaseStudyImage>
    
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">
                    Balancing Human Curation with Algorithmic Discovery
                  </h3>
    
                  <p className="mt-5 max-w-3xl">
                    Human curation forms the foundation of the discovery experience,
                    allowing stories with deeper context and unique perspectives to
                    surface alongside more popular content. Recommendations complement
                    that editorial judgment by helping users continue exploring related
                    stories without turning discovery into a purely algorithmic feed.
                  </p>
                </div>
    
              </div>
                        
        </CaseStudySection>
  );
}