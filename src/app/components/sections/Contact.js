// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="mx-auto max-w-6xl px-6 py-32"
//     >
//       <div className="border-t border-[#DDD7D0] pt-16">
//         <p className="text-sm uppercase tracking-[0.2em] text-[#8A7F8D]">
//           Contact
//         </p>

//         <h2 className="mt-8 max-w-3xl font-serif text-5xl leading-tight text-[#1E1B1F]">
//           Interested in building thoughtful products together?
//         </h2>

//         <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B6B6B]">
//           I&apos;m always interested in connecting with people building
//           meaningful products and solving interesting problems.
//         </p>

//         <div className="mt-10 flex flex-wrap gap-6 text-sm">
//           <a
//             href="mailto:your@email.com"
//             className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
//           >
//             Email
//           </a>

//           <a
//             href="https://www.linkedin.com"
//             className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
//           >
//             LinkedIn
//           </a>

//           <a
//             href="https://github.com"
//             className="text-[#6B5B73] transition hover:text-[#1E1B1F]"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 pb-20 pt-32"
    >
      <div className="border-t border-[#DDD7D0] pt-20">

        <p className="text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
          Contact
        </p>

        <h2 className="mt-8 max-w-4xl font-serif text-5xl leading-tight text-[#1E1B1F] md:text-6xl">
          Let&apos;s build something thoughtful.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#5F5A60]">
          I&apos;m interested in connecting with teams building meaningful
          products and solving interesting problems.
        </p>


        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          <a
            href="mailto:your@email.com"
            className="
              text-[#6B5B73]
              transition-colors
              duration-300
              hover:text-[#1E1B1F]
            "
          >
            Email →
          </a>

          <a
            href="https://www.linkedin.com/in/mary-boles/"
            className="
              text-[#6B5B73]
              transition-colors
              duration-300
              hover:text-[#1E1B1F]
            "
          >
            LinkedIn →
          </a>

          <a
            href="https://github.com/ma-boles"
            className="
              text-[#6B5B73]
              transition-colors
              duration-300
              hover:text-[#1E1B1F]
            "
          >
            GitHub →
          </a>
        </div>


        <div className="mt-24 flex items-center justify-between border-t border-[#DDD7D0] pt-8 text-sm text-[#8A7F8D]">
          <p>
            Mary Boles
          </p>

          <p>
            Product-Minded Software Engineer
          </p>
        </div>

      </div>
    </section>
  );
}