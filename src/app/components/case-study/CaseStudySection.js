export default function CaseStudySection({
  id,
  title,
  children,
}) {
  return (
    <section
      id={id}
      className="border-t border-[#DDD7D0] pt-12 scroll-mt-24"
    >
      <h2 className="font-serif text-4xl">
        {title}
      </h2>

      <div className="mt-8 max-w-3xl space-y-6 text-[#5F5A60] leading-relaxed">
        {children}
      </div>
    </section>
  );
}