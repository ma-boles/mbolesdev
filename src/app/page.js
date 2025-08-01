'use client'
import ProjectDetails from "./components/ProjectDetails";
import Image from "next/image";
import BackToTopButton from "./components/BackToTopButton";
import LargeNav from "./components/LargeNav";
import SmallNav from "./components/SmallNav";
import ToggleSwitch from "./components/ToggleSwitch";
import { useState } from "react";


export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const currentDate = new Date().getFullYear();

  const handleImageLoad = () => {
    setLoaded(true); // Set loaded to true when the image has loaded
  };

  return (
    <>
    <main>
    <section className="relative grid grid-rows-[20px_1fr_20px] min-h-screen py-8 sm:py-16 sm-px-8 md:p-20 bg-white bg-opacity-10 backdrop-blur-3x overflow-hidden">
      <div className={`fade-in ${loaded ? 'fade-in-active' : ''}`} role="img" aria-label="background">
          <Image
          src="/images/background-blocks3.svg"
          alt="background"
          className="z-0 grayscale opacity-30 filter brightness-50 contrast-200"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "grayscale(100%)",
          }}
          onLoad={handleImageLoad} // Trigger state change on image load
          />
      </div>
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left px-2 md:px-0 z-10">
            <h2 className="mt-16 sm:mt-8 fade-in-up-1 font-extrabold safari-text-outline-white">Developer & Product Builder</h2>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <h3 className="text-gray-300 safari-text-outline-gray-300 font-extrabold dark:text-purple-400 dark:safari-text-outline-purple-400 fade-in-up-2" >Building digital products that blend UX, strategy, and community impact
</h3>
            </div>
            <div className="mb-4 flex md:hidden items-center justify-center h-full w-full">
              <h1 /* mobile screen */ className="px-2 font-extrabold border-4 border-white shadow-[0px_12px_20px_rgba(0,0,0,0.5)] safari-text-outline-white whitespace-nowrap md:hidden fade-in-up-3">Mary Boles</h1>
            </div>
        </div>
        <div className="row-start-4 flex flex-col items-center sm:flex-row sm:items-start justify-between z-10">
          <h1 /* med screen */ className="mt-36 px-2 font-extrabold whitespace-nowrap hidden md:block border-4 border-white shadow-[0px_12px_20px_rgba(0,0,0,0.5)] fade-in-up-3">Mary Boles</h1>
          <LargeNav className="hidden md:block"/>
          <SmallNav className="absolute bottom-0 block md:hidden"/>
        </div>

    <div className="min-h-screen absolute top-5 right-5 ">
      <ToggleSwitch />
    </div>
    </section>

    <BackToTopButton />

    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen w-full bg-white bg-opacity-20 py-16 px-4 sm:p-20" id="about">
      <h2 className="font-extrabold safari-text-outline-white">ABOUT | SKILLS</h2>
      <div className="flex flex-col md:flex-row justify-start mt-20 md:justify-between items-center md-items-start">
        <div className="w-full md:w-3/5 pb-4">
          <p className="mr-2">Hi! I&#39;m Mary, a product-focused software developer with a background in education and a passion for building impactful web applications. Motivated by creativity and <span className="font-bold">problem-solving,</span> I transitioned from the classroom to code where I now design and build solutions that are as thoughtful as they are function. I specialize in <span className="font-bold">JavaScript, React, Next.js, Tailwind CSS, and MySQL</span>, creating clean, responsive interfaces that prioritize user experience. My years in education sharpened my strengths in<span className="font-bold"> communication, collaboration, analytical thinking,</span> all of which directly support my product mindset and ability to understand user needs, align with goals, and work across disciplines.<br/><br/>

          Most recently, I built <span className="font-bold">Bracket Madness</span>, a fan-centered web app that brings community and sports together through interactive experiences.<br></br>

          Outside of coding, you&#39;ll find me collecting vinyl, CDs, DJing, watching films and sports, or diving into a good podcast.<br/><br/>

          Feel free to <a href="#contact"><span className="underline hover:bg-gray-800 dark:hover:bg-blue-600">reach out</span></a> — I&#39;m always up for discussing product ideas, sports UX, or sharing playlists and film recommendations.
          </p>
        </div>
        <div className="w-full p-4 m-4 md:w-2/5 min-w-[200px] bg-white bg-opacity-5 rounded-lg ">
          <h3 className="my-2 py-2 font-extrabold bg-gray-400 dark:bg-purple-500 bg-opacity-50 text-center text-2xl safari-text-outline-white sm:text-4xl lg-mobile:text-4xl md:text-4xl lg:text-4xl">TOOLBOX</h3>
          <div className="flex flex-wrap justify-center">
            <Image
            src="/images/Next.svg"
            alt="Next.js badge"
            className="p-1"
            width={99}
            height={28}/>
            <Image
            src="/images/JavaScript-F7DF1E.svg"
            alt="JavaScript badge"
            className="p-1"
            width={127}
            height={28}/>
            <Image
            src="/images/React-61DAFB.svg"
            alt="React badge"
            className="p-1"
            width={87}
            height={28}/>
            <Image
            src="/images/Tailwind_CSS-06B6D4.svg"
            alt="Tailwind CSS badge"
            className="p-1"
            width={143}
            height={28}/>
            <Image
            src="/images/APIs-000000.svg"
            alt="APIs badge"
            className="p-1"
            width={56}
            height={28}/>
            <Image
            src="/images/MySQL-4479A1.svg"
            alt="MySQL badge"
             className="p-1"
            width={94}
            height={28}
            />
            <Image
            src="/images/GitHub-181717.svg"
            alt="GitHub badge"
            className="p-1"
            width={96}
            height={28}/>
            <Image
            src="/images/VS_Code-007ACC.svg"
            alt="VS Code badge"
            className="p-1"
            width={82}
            height={28}/>
            <Image
            src="/images/MongoDB-47A248.svg"
            alt="MongoDB badge"
            className="p-1"
            width={111}
            height={28}/>
            <Image
            src="/images/Vercel-000000.svg"
            alt="Vercel badge"
            className="p-1"
            width={94}
            height={28}/>
          </div>
      </div>
    </div>
    </section>

    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen py-16 px-4 bg-white bg-opacity-10 sm:p-20" id="works">
     <h2 className="font-extrabold safari-text-outline-white">W<span className="text-gray-300 safari-text-outline-gray-400 dark:safari-text-outline-purple-400 dark:text-purple-400">O</span>RKS</h2>
      <div className="px-2 sm:px-4 mt-20 flex flex-col bg-black bg-opacity-20 dark:border-none dark:bg-white dark:bg-opacity-5 rounded-md lg:flex-row">
          <div className="my-auto ">
            <h2 className="p-2 m-2 text-center font-normal bg-black bg-opacity-70"><span className="font-extrabold text-blue-600 safari-text-outline-blue-600">Bracket</span>Madness</h2>
          </div>
          <div className="py-2 sm:p-4">
            <p className="mt-0 lg:mt-12">
            <span className="italic font-light text-blue-200">March 2025 - present</span><br/>
              <strong>Bracket Madness</strong> is an interactive sports bracket management app optimized for the NCAA Women&#39;s March Madness tournament. I led full-stack development and designed a seamless user experience using React/Next.js and MySQL. The app supports dynamic scoring, multiple brackets per user, creation of private pool challenges, and more. Future plans include expansion to professional leagues and additional weekly/daily challenges.
            </p>

            <ProjectDetails />

            <div className="flex mt-4 mb-2 justify-start">
              <a href="https://github.com/ma-boles/Bracket_Madness"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="px-8 py-2 border border-white rounded-md hover:bg-blue-600">Code</button>
              </a>

              <button className="px-8 py-2 ml-2 bg-gray-500 rounded-md cursor-not-allowed">Live</button>
              <p className="px-2 py-2 ml-2 underline cursor-not-allowed hover:text-blue-400">Case Study</p>
            </div>
          </div>
      </div>

              {/* <a href="https://github.com/ma-boles/flowmode/tree/main/my-nextjs-app"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="px-8 py-2 border border-white rounded-md hover:bg-blue-600">Code</button>
              </a> */}

              
      {/* <div className="px-2 sm:px-4 mt-20 flex flex-col bg-black bg-opacity-20 dark:border-none dark:bg-white dark:bg-opacity-5 rounded-md lg:flex-row">
          <div className="my-auto ">
            <h2 className="p-2 m-2 text-center font-normal bg-black bg-opacity-70"><span className="font-extrabold safari-text-outline-green-600">flow</span>mode</h2>
          </div>
          <div className="py-2 sm:p-4">
            <p className="mt-0 lg:mt-12">
            <span className="italic font-light text-green-300">*Still in progress</span><br/>
              <span className="safari-text-outline-white">Flowmode</span> is a web-based timer that integrates with Spotify to help users maintain productivity while preventing burnout. By encouraging regular breaks through customizable Flow and Rest intervals, <span className="font-bold">flowmode</span> helps users work for longer periods without fatigue. Users can choose audio to accompany both Flow and Rest phases, making the experience enjoyable and effective.
            </p>

            <ProjectDetails />

            <div className="flex mt-4 mb-2 justify-start">
              <a href="https://github.com/ma-boles/flowmode/tree/main/my-nextjs-app"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="px-8 py-2 border border-white rounded-md hover:bg-green-600">Code</button>
              </a>
              <button className="px-8 py-2 ml-2 bg-gray-500 rounded-md cursor-not-allowed">Live</button>
            </div>
          </div>
      </div> */}
    </section>

    <section className="flex flex-col min-h-[100vh] p-8 overflow-y-auto sm:p-20 bg-white bg-opacity-5 backdrop-blur-3xl"  id="contact">
      <div className={`fade-in ${loaded ? 'fade-in-active' : ''}`}>
        <Image
          src="/images/background-blocks3.svg"
          alt="background"
          className="z-0 grayscale opacity-20 filter brightness-50 contrast-200"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "grayscale(100%)",
          }}
          onLoad={handleImageLoad} // Trigger state change on image load
          />
        </div>

      <div className="flex flex-col flex-grow">
        <div className="sm:items-start text-center sm:text-left z-10">
          <h1 className="px-1 hidden md:block font-extrabold">LET&#39;S <span className="px-2 font-extrabold text-yellow-400 border-4 border-white shadow-[0px_12px_20px_rgba(0,0,0,0.5)]">CONNECT</span></h1>
          <h1 /* mobile */ className="px-1 mt-20 block leading-3 md:hidden font-extrabold safari-text-outline-white" >LET&#39;S </h1><br />
          <h1 /* mobile */ className="mb-6 px-2 text-yellow-400 border-4 border-white
          shadow-[0px_12px_20px_rgba(0,0,0,0.5)] inline-block md:hidden font-extrabold  ">CONNECT</h1>
          <h2 className="italic text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl">I&#39;m excited to bring curiosity, creativity, and product thinking to a team where I can help build something impactful.</h2>
        </div>
        <div className="flex flex-col flex-grow justify-between md:p-0 z-10">
          <div className="flex flex-col mt-auto md:flex-row justify-between w-full text-left">
            <div className="text-left">
              <h3 className="text-2xl font-extrabold sm:text-3xl">EMAIL</h3>
              <p className="text-xl font-semibold text-yellow-400 sm:text-2xl">mboles.dev@gmail.com</p>
            </div>
            <div className="text-left hover:bg-black hover:bg-opacity-5">
              <h3 className="pb-1 font-extrabold text-2xl sm:text-3xl text-yellow-400">SOCIAL</h3>
              <div className="flex sm:justify-start">
                <a href="https://www.linkedin.com/in/mary-boles"
                  target="_blank"
                  rel="noopener noreferrer">
                    <button className="hover:scale-125 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500">
                    <div className="invert" style={{ width: '30px', height:'30px', display:'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Image
                        src="/images/linkedin-brands-solid (1).svg"
                        alt="Link to LinkedIn Profile"
                        width={30}
                        height={30} />
                    </div>
                    </button>
                </a>
                <a href="https://github.com/ma-boles"
                  target="_blank"
                  rel="noopener noreferrer">
                    <button className="hover:scale-125 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500">
                    <div className="invert mx-4" style={{ width: '30px', height:'30px', display:'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Image
                        src="/images/github-brands-solid (1).svg"
                        alt="Link to GitHub Profile"
                        width={30}
                        height={30}/>
                    </div>
                    </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
    <footer className="py-4 bg-white bg-opacity-5">
      <div className="conatiner mx-auto text-center">
        <p className="text-sm">&copy; {currentDate} Mary Boles</p>
      </div>
    </footer>
    </>
  );
}
