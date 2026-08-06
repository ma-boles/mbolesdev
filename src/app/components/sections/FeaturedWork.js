export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
          Featured Work
        </p>
      </div>

      <div className="border-t border-[#DDD7D0] pt-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Project Information */}
          <div>
            <h2 className="font-serif text-5xl leading-tight text-[#1E1B1F] transition-colors duration-300 hover:text-[#6B5B73]">
              Off Tape
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#5F5A60]">
            A discovery platform helping fans explore the people, history, and culture behind women&apos;s basketball.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Next.js",
                "TypeScript",
                "Supabase",
                "Recommendation Systems",
                "Content Architecture",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-[#DDD7D0]
                    bg-[#F4F0EA]
                    px-4
                    py-2
                    text-sm
                    text-[#6B5B73]
                    transition-all
                    duration-300
                    hover:border-[#6B5B73]
                    hover:bg-[#EDE5EF]
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-8 text-sm">
              <a
                href="/case-studies/off-tape"
                className="
                  text-[#6B5B73]
                  transition-colors
                  duration-300
                  hover:text-[#1E1B1F]
                "
              >
                Read Case Study →
              </a>

              <a
                href="#"
                className="
                  text-[#6B5B73]
                  transition-colors
                  duration-300
                  hover:text-[#1E1B1F]
                "
              >
                Visit Product →
              </a>
            </div>
          </div>


          {/* Project Visual */}
          <div
            className="
              group
              aspect-[4/3]
              overflow-hidden
              rounded-sm
              bg-[#E9E1D8]
            "
          >
            <div
              className="
                flex
                h-full
                items-center
                justify-center
                text-sm
                text-[#8A7F8D]
                transition-transform
                duration-500
                group-hover:scale-[1.02]
              "
            >
              Off Tape Preview
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}