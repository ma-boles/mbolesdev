export default function CaseStudyVideo({
  src,
  poster,
  alt = "",
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-sm border border-[#DDD7D0]">
      <video
        className="w-full"
        src={src}
        poster={poster}
        controls
        playsInline
      />
    </div>
  );
}