
export default function Home() {
  return (
    <>
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1 className="text-6xl font-bold text-purple-700 bg-white ">Mary Boles</h1>
        <h1 className="text-6xl font-semibold">Software Engineer</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h2 className="text-5xl font-semibold">Creating <span className="bg-white text-purple-700">innovative</span> <span className="bg-white text-purple-700">user-centric</span> solutions.</h2>
        </div>
      </main>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <button className="px-4 py-4 w-36 text-xl font-semibold border-2 border-white rounded-lg hover:bg-purple-600">Works</button>
        <button className="py-4 w-36 text-xl font-semibold border-2 border-white rounded-lg hover:bg-purple-600">Contact Me</button>
      </div>
    </section>
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="p-1 text-5xl font-semibold text-purple-600 bg-white ">About</h1>
      <p>my bio....</p>
      <h2 className="p-1 text-4xl font-semibold text-purple-700 bg-white ">Skills</h2>
    </section>
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="p-1 text-5xl font-semibold text-purple-600 bg-white ">Works</h1>
      <div className="p-4 border border-white rounded-md">
        <div className="flex">
          <p className="p-6 text-5xl font-thin"><span className="text-green-600 font-extrabold">flow</span>mode</p>
          <p className="p-4 text-xl">A wellness and productivity app allowing users to utlize Spotify audio to promote a healthy balance of focus and rest.<br/>
          <span className="font-semibold">Tech:</span> Next.js, Tailwind CSS, MongoDB, Spotify API
          <div className="mt-2">
            <button className="px-4 mr-2 bg-purple-600 rounded-md">Code</button>
            <button className="px-4 m-2 bg-green-600 rounded-md">Live</button>
          </div>
          </p>
        </div>
      </div>
    </section>
    <section className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="p-1 text-5xl font-semibold text-purple-600 bg-white ">Contact & Socials</h1>
      <div className="flex items-center sm:items-start">
        <h2 className="p-4 text-3xl">Linkedin</h2>
        <h2 className="p-4 text-3xl">GitHub</h2>
      </div>
    </section>
    </>
  );
}
