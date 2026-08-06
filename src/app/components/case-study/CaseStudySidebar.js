export default function CaseStudySidebar({ sections }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-12">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
          Contents
        </p>

        <nav className="space-y-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-[#6B6B6B] transition hover:text-[#1E1B1F]"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}