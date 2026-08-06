export default function CaseStudyImage({
  caption,
  children,
}) {
  return (
    <figure className="my-12">
      <div className="aspect-[16/9] rounded-sm bg-[#DDD7D0] flex items-center justify-center">
        {children}
      </div>

      {caption && (
        <figcaption className="mt-3 text-sm text-[#8A7F8D]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}