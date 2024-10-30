'use client'
import ProjectDetails from "./components/ProjectDetails";
import Image from "next/image";
import BackToTopButton from "./components/BackToTopButton";
import LargeNav from "./components/LargeNav";
import SmallNav from "./components/SmallNav";
import ToggleSwitch from "./components/ToggleSwitch";


export default function Home() {
  const currentDate = new Date().getFullYear();
  
  return (
    <>
    <section className="relative grid grid-rows-[20px_1fr_20px] min-h-screen py-8 px-0 sm:py-16 sm-px-8 md:p-20 bg-white bg-opacity-5 backdrop-blur-3xl">
      <Image 
      src="/images/background-blocks.svg"
      alt="background"
      className="z-0 grayscale opacity-5 filter brightness-75 contrast-125"
      width={1000}
      height={1920}
      style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        filter: "grayscale(100%)", 
        objectFit:"cover"
      }}
      />
      <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left px-2 md:px-0 z-10">
          <h2 className="mt-16 sm:mt-8">Web Developer</h2>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <h3 className="text-gray-400 dark:text-purple-400">Delivering innovative user-centric solutions</h3>
          </div>
          <h1 /* mobile screen */ className="mt-24 text-gray-600 dark:text-purple-700 bg-white whitespace-nowrap md:hidden">Mary Boles</h1>
      </div>
      <div className="row-start-4 flex flex-col items-center sm:flex-row sm:items-start justify-between z-10">
        <h1 /* med screen */ className="mt-36 text-gray-600 dark:text-purple-700 bg-white whitespace-nowrap hidden md:block shadow-[0px_12px_20px_rgba(0,0,0,0.5)]">Mary Boles</h1>
        <LargeNav className="hidden md:block"/>
        <SmallNav className="absolute bottom-0 block md:hidden"/>
      </div>

    <div className="min-h-screen absolute top-5 right-5 ">
      <ToggleSwitch />
    </div>
    </section>

    <BackToTopButton />

    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen w-full bg-white bg-opacity-20 py-16 px-8  sm:p-20" id="about">
      <h2 className="font-syne">ABOUT | <span className="text-gray-400 dark:text-purple-500">SKILLS</span></h2>
      <div className="flex flex-col md:flex-row justify-start mt-20 md:justify-between items-center md-items-start">
        <div className="w-full md:w-3/5 pb-4">
          <p className="mr-2">Hi! I'm Mary, a web developer transitioning from a career in the education field. Movtivated by my passion for creativity and <span className="font-bold">problem-solving,</span> I made the decision to pursue development focusing on building impactful web applications.<br/><br/>
          With experience in <span className="font-bold">JavaScript, React, Next.js, Tailwind CSS,</span> I create solutions that merge functionality and clean UI design. My background in education has honed my skills in communication, project management, analytical thinking, which are invaluable to understanding user needs and collaborating with teams.<br/><br/>
          Outside of coding, I enjoy collecting vinyl records + CD's, DJing, watching films and sports, as well as listening to podcasts!<br/><br/>
          Feel free to get in touch if you'd like to collaborate, or simply <a href="#contact"><span className="underline hover:text-blue-400 dark:hover:text-purple-400">connect</span></a>!
          </p>
        </div>
        <div className="w-full p-8 m-4 md:w-2/5 min-w-[200px] bg-white bg-opacity-5 rounded-lg ">
          <h4 className="my-2 py-2 bg-gray-400 dark:bg-purple-500 bg-opacity-50 text-center">TOOLBOX</h4>
          <div className="flex flex-wrap justify-center">
            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js badge" className="p-1"/>
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript badge" className="p-1"/>
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React badge" className="p-1"/>
            <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS badge" className="p-1"/>
            <img src="https://img.shields.io/badge/APIs-000000?style=for-the-badge&logo=api&logoColor=white" alt="APIs badge" className="p-1"/>
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub badge" className="p-1"/>
            <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code badge" className="p-1"/>
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB badge" className="p-1"/>
            <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel badge" className="p-1"/>
          </div>
      </div>
    </div>
    </section>

    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen py-16 px-8 sm:p-20" id="works">
     <h2 className="font-syne">W<span className="text-gray-500 dark:text-purple-700">O</span>RKS</h2>
      <div className="px-4 mt-20 flex flex-col border-2 border-white dark:border-none bg-white bg-opacity-5 rounded-md lg:flex-row">
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
              <button className="px-8 py-2 ml-2  bg-green-700 rounded-md cursor-none">Live</button>
            </div>
          </div>
      </div>
    </section>

    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen relative py-16 px-8 sm:p-20 bg-white bg-opacity-5 backdrop-blur-3xl"  id="contact">
    <Image 
      src="/images/background-blocks.svg"
      alt="background"
      className="z-0 grayscale opacity-10 filter brightness-50 contrast-200"
      width={1000}
      height={1920}
      style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        filter: "grayscale(100%)", 
        objectFit:"cover"
      }}
      />
      <div className="sm:items-start text-center sm:text-left">
        <h1 className="p-1">GET IN <span className=" text-gray-500 dark:text-purple-600 ">TOUCH</span></h1><br/>
        <h3>I'm Excited to Bring My Skills to Your Team!</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 py-8 px-12 sm:p-20 justify-between sm:flex">
        <div className="text-left">
          <h4 className="text-gray-400 dark:text-purple-400">EMAIL</h4>
          <p className="text-lg font-semibold">mboles.dev@gmail.com</p>
        </div>
        <div className="text-left">
          <h4 className="pb-1 text-gray-400 dark:text-purple-400">SOCIAL</h4>
          <div className="flex sm:justify-start">
            <a href="https://www.linkedin.com/in/mary-boles" 
              target="_blank"
              rel="noopener noreferrer">
                <div className="invert">
                  <Image 
                    src="/images/linkedin-brands-solid (1).svg"
                    alt="Link to LinkedIn Profile"
                    width={25}
                    height={25} />
                </div>
            </a>
            <a href="https://github.com/ma-boles" 
              target="_blank"
              rel="noopener noreferrer">
                <div className="invert px-2 sm:px-4 ">
                  <Image 
                    src="/images/github-brands-solid (1).svg"
                    alt="Link to GitHub Profile"
                    width={27}
                    height={27}/>
                </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <footer className="py-4 bg-white bg-opacity-5">
      <div className="conatiner mx-auto text-center">
        <p className="text-sm">&copy; {currentDate} Mary Boles</p>
      </div>
    </footer>
    </>
  );
}
