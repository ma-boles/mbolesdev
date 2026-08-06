export default function CaseStudyMetadata({
  role,
  timeline,
  responsibilities = [],
  stack = [],
  links = [],
}) {
  return (
    <section className="mt-16 border-t border-[#DDD7D0] pt-10">
      <div className="grid gap-10 md:grid-cols-5">

        {/* Role */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F8D]">
            Role
          </p>

          <p className="mt-3 leading-relaxed text-[#1E1B1F]">
            {role}
          </p>
        </div>


        {/* Timeline */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F8D]">
            Timeline
          </p>

          <p className="mt-3 leading-relaxed text-[#1E1B1F]">
            {timeline}
          </p>
        </div>


        {/* Responsibilities */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F8D]">
            Responsibilities
          </p>

          <ul className="mt-3 space-y-1 text-[#1E1B1F]">
            {responsibilities.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>


        {/* Stack */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F8D]">
            Stack
          </p>

          <ul className="mt-3 space-y-1 text-[#1E1B1F]">
            {stack.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>


        {/* Links */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F8D]">
            Links
          </p>

          <div className="mt-3 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}