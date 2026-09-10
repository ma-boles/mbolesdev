
export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <p className="mb-8 text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
        Product-Minded Software Engineer
        </p>

        <h1 className="font-serif text-6xl leading-tight md:text-8xl">
        MARY <span className="text-[#6B5B73]">BOLES</span>
        </h1>

        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[#1E1B1F]">
        Building thoughtful digital products where user experience,
        technology, and strategy come together.
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
        I take products from idea to launch, defining problems, 
        designing intuitive experiences, and building the systems behind them.
        </p>
      
      
      <div className="mt-10 flex gap-6 text-sm">
        <a
          href="#featured-work"
          className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
        >
          View Work →
        </a>

        <a
          href="#contact"
          className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
        >
          Contact
        </a>
      </div>
    </section>
  );
}