import CaseStudySection from "./CaseStudySection";

export default function TestingReliability() {
  return (
        <CaseStudySection
                id="testing-reliability"
                title="Testing Reliability"
              >
                  <div className="space-y-16">
    
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">
                      Evolving the Testing Strategy
                    </h3>
    
                    <p className="mt-5 max-w-3xl">
                      During the early stages of development, I relied primarily on manual
                      testing as new features were implemented. This worked well for
                      validating expected workflows and iterating quickly, but became less
                      effective as the platform grew in complexity. As the person building
                      the application, I naturally tested features according to how I
                      expected them to be used, making it harder to anticipate edge cases
                      and unexpected behavior.
                    </p>
    
                    <p className="mt-5 max-w-3xl">
                      To improve confidence in the application&apos;s behavior, I introduced
                      automated testing for its most critical functionality. Writing tests
                      exposed areas where functions could be simplified, assumptions
                      challenged, and edge cases handled more deliberately. Testing became
                      less about finding bugs after the fact and more about designing
                      software that was easier to reason about, maintain, and extend.
                    </p>
                  </div>
    
    
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">
                      Automated Testing
                    </h3>
    
                    <p className="mt-5 max-w-3xl">
                      I selected Vitest because it integrated naturally with the existing
                      Next.js and TypeScript codebase while providing a lightweight way to
                      introduce automated testing without unnecessary complexity.
                    </p>
    
                    <p className="mt-5 max-w-3xl">
                      Testing focused on core business logic rather than individual UI
                      components, with priority given to the recommendation engine, API
                      routes, and validation logic. Recommendation tests verified ranking
                      and filtering behavior, validation tests ensured editorial data met
                      expected requirements before reaching the database, and API tests
                      confirmed requests were handled correctly under both expected and
                      error conditions.
                    </p>
                  </div>
    
                </div>
                
        </CaseStudySection>
    
  );
}