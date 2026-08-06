// const principles = [
//   {
//     number: "01",
//     title: "Understand the problem",
//     description:
//       "Start with the user need before deciding what to build. Strong products begin with understanding the problem, not the solution.",
//   },
//   {
//     number: "02",
//     title: "Design the experience",
//     description:
//       "Think through how people interact with a product and create experiences that feel intentional, intuitive, and useful.",
//   },
//   {
//     number: "03",
//     title: "Build the system",
//     description:
//       "Translate product decisions into reliable, maintainable systems that support both users and the people operating the product.",
//   },
//   {
//     number: "04",
//     title: "Iterate thoughtfully",
//     description:
//       "Use feedback and learning to refine the product, making deliberate improvements instead of simply adding more features.",
//   },
// ];

// export default function Approach() {
//   return (
//     <section className="mx-auto max-w-6xl px-6 py-32">
//       <div className="mb-16">
//         <p className="text-sm uppercase tracking-[0.2em] text-[#8A7F8D]">
//           Approach
//         </p>

//         <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-[#1E1B1F]">
//           Building products through curiosity, intention, and iteration.
//         </h2>
//       </div>

//       <div className="grid gap-12 border-t border-[#DDD7D0] pt-12 md:grid-cols-2">
//         {principles.map((principle) => (
//           <div key={principle.number}>
//             <p className="text-sm text-[#6B5B73]">
//               {principle.number}
//             </p>

//             <h3 className="mt-4 font-serif text-3xl text-[#1E1B1F]">
//               {principle.title}
//             </h3>

//             <p className="mt-4 max-w-md leading-relaxed text-[#6B6B6B]">
//               {principle.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


const principles = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Start with the user need before deciding what to build. Strong products begin with understanding the problem, not the solution.",
  },
  {
    number: "02",
    title: "Design the experience",
    description:
      "Think through how people interact with a product and create experiences that feel intentional, intuitive, and useful.",
  },
  {
    number: "03",
    title: "Build the system",
    description:
      "Translate product decisions into reliable, maintainable systems that support both users and the people operating the product.",
  },
  {
    number: "04",
    title: "Iterate thoughtfully",
    description:
      "Use feedback and learning to refine the product, making deliberate improvements instead of simply adding more features.",
  },
];

export default function Approach() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-[#6B5B73]">
          Approach
        </p>

        <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-[#1E1B1F]">
            Building products from problem to launch.
        </h2>
      </div>


      <div className="border-t border-[#DDD7D0]">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="
              group
              grid
              gap-6
              border-b
              border-[#DDD7D0]
              py-10
              transition-colors
              duration-300
              md:grid-cols-[100px_1fr]
            "
          >
            {/* Number */}
            <div className="text-sm text-[#8A7F8D] transition-colors duration-300 group-hover:text-[#6B5B73]">
              {principle.number}
            </div>


            {/* Content */}
            <div>
              <h3 className="font-serif text-3xl text-[#1E1B1F] transition-colors duration-300 group-hover:text-[#6B5B73]">
                {principle.title}
              </h3>

              <p className="mt-4 max-w-xl leading-relaxed text-[#5F5A60]">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}