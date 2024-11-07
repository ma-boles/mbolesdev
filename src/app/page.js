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
          src="/images/giant blocks.svg"
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
            <h2 className="mt-16 sm:mt-8 fade-in-up-1 font-extrabold">Web Developer</h2>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <h3 className="text-gray-300 font-bold dark:text-purple-500 fade-in-up-2">Delivering innovative user-centric solutions</h3>
            </div>
            <h1 /* mobile screen */ className="mt-24 text-gray-700 font-extrabold dark:text-purple-700 bg-white whitespace-nowrap md:hidden lg-mobile:mt-12 fade-in-up-3">Mary Boles</h1>
        </div>
        <div className="row-start-4 flex flex-col items-center sm:flex-row sm:items-start justify-between z-10">
          <h1 /* med screen */ className="mt-36 text-gray-700 font-extrabold dark:text-purple-700 bg-white whitespace-nowrap hidden md:block shadow-[0px_12px_20px_rgba(0,0,0,0.5)] fade-in-up-3">Mary Boles</h1>
          <LargeNav className="hidden md:block"/>
          <SmallNav className="absolute bottom-0 block md:hidden"/>
        </div>

    <div className="min-h-screen absolute top-5 right-5 ">
      <ToggleSwitch />
    </div>
    </section>

    <BackToTopButton />

    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen w-full bg-white bg-opacity-20 py-16 px-4 sm:p-20" id="about">
      <h2 className="font-syne">ABOUT | SKILLS</h2>
      <div className="flex flex-col md:flex-row justify-start mt-20 md:justify-between items-center md-items-start">
        <div className="w-full md:w-3/5 pb-4">
          <p className="mr-2">Hi! I&#39;m Mary, a web developer transitioning from a career in the education field. Movtivated by my passion for creativity and <span className="font-bold">problem-solving,</span> I made the decision to pursue development focusing on building impactful web applications.<br/><br/>
          With experience in <span className="font-bold">JavaScript, React, Next.js, Tailwind CSS,</span> I create solutions that merge functionality and clean UI design. My background in education has honed my skills in communication, project management, analytical thinking, which are invaluable to understanding user needs and collaborating with teams.<br/><br/>
          Outside of coding, I enjoy collecting vinyl records + CD&#39;s, DJing, watching films and sports, as well as listening to podcasts!<br/><br/>
          Feel free to get in touch if you would like to collaborate, or simply <a href="#contact"><span className="underline hover:text-blue-400 dark:hover:text-purple-400">connect</span></a>!
          </p>
        </div>
        <div className="w-full p-4 m-4 md:w-2/5 min-w-[200px] bg-white bg-opacity-5 rounded-lg ">
          <h3 className="my-2 py-2 bg-gray-400 dark:bg-purple-500 bg-opacity-50 text-center text-2xl sm:text-4xl lg-mobile:text-4xl md:text-4xl lg:text-4xl font-extrabold">TOOLBOX</h3>
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
     <h2 className="font-syne">W<span className="text-gray-400 dark:text-purple-700">O</span>RKS</h2>
      <div className="px-2 sm:px-4 mt-20 flex flex-col bg-black bg-opacity-20 dark:border-none dark:bg-white dark:bg-opacity-5 rounded-md lg:flex-row">
          <div className="my-auto">
            <h2 className="p-6 text-center"><span className="text-green-600 font-extrabold">flow</span>mode</h2>
          </div>
          <div className="py-2 sm:p-4">
            <p className="mt-0 lg:mt-12">
            <span className="italic font-light text-green-300">*Still in progress</span><br/>
              Flowmode is a web-based timer that integrates with Spotify to help users maintain productivity while preventing burnout. By encouraging regular breaks through customizable Flow and Rest intervals, <span className="text-green-600 font-extrabold">flow</span>mode helps users work for longer periods without fatigue. Users can choose audio to accompany both Flow and Rest phases, making the experience enjoyable and effective.
            </p>

            <ProjectDetails />

            <div className="flex mt-4 mb-2 sm:justify-between md:justify-start">
              <a href="https://github.com/ma-boles/flowmode/tree/main/my-nextjs-app"
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="px-8 py-2 border border-white dark:border-gray-500 rounded-md hover:bg-gray-500">Code</button>
              </a>
              <button className="px-8 py-2 ml-2  bg-green-700 rounded-md cursor-not-allowed">Live</button>
            </div>
          </div>
      </div>
    </section>

    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen relative p-8 overflow-hidden sm:p-20 bg-white bg-opacity-5 backdrop-blur-3xl"  id="contact">
      <div className={`fade-in ${loaded ? 'fade-in-active' : ''}`}>
        <Image
          src="/images/giant blocks.svg"
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
      <div className="sm:items-start text-center sm:text-left z-10">
        <h1 className="px-1 hidden md:block">GET IN <span className="bg-white text-gray-600 dark:text-purple-700">TOUCH</span></h1>
        <h1 className="px-1 block leading-3 md:hidden">GET IN </h1><br />
        <h1 className="mb-6 bg-white text-gray-600 dark:text-purple-700 inline-block md:hidden">TOUCH</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">I&#39;m Excited to Bring My Skills to Your Team!</h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 lg-mobile:px-12 sm:p-20 justify-between sm:flex z-10">
        <div className="text-left">
          <h3 className="text-gray-400 dark:text-purple-400">EMAIL</h3>
          <p className="text-2xl font-semibold">mboles.dev@gmail.com</p>
        </div>
        <div className="text-left">
          <h3 className="pb-1 text-gray-400 dark:text-purple-400">SOCIAL</h3>
          <div className="flex sm:justify-start">
            <a href="https://www.linkedin.com/in/mary-boles"
              target="_blank"
              rel="noopener noreferrer">
                <button className="hover:scale-125 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500
">
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
                <button className="hover:scale-125 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500
">
                <div className="invert mx-4" style={{ width: '30px', height:'30px', display:'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
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
