'use client'
import ProjectDetails from "./components/ProjectDetails";
import Image from "next/image";
import BackToTopButton from "./components/BackToTopButton";
import LargeNav from "./components/LargeNav";
import SmallNav from "./components/SmallNav";
import ToggleSwitch from "./components/ToggleSwitch";


export default function Home() {
  
  return (
    <>
    <section className="relative grid grid-rows-[20px_1fr_20px] min-h-screen py-16 px-8 sm:p-20">
      <Image 
      src="/images/background-blocks.svg"
      alt="background"
      layout="fill"
      objectFit="cover"
      className="z-0 grayscale opacity-10"
      style={{ filter: "grayscale(100%)" }}
      />
      <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left px-2 sm:px-0 z-10">
          <h2 className="mt-8">Software Engineer</h2>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <h3 className="text-gray-400 dark:text-purple-400">Delivering innovative user-centric solutions</h3>
          </div>
          <h1 className="mt-24 text-gray-600 dark:text-purple-700 bg-white whitespace-nowrap md:hidden">Mary Boles</h1>
      </div>
      <div className="row-start-4 flex flex-col items-center sm:flex-row sm:items-start justify-between z-10">
        <h1 className="mt-36 text-gray-600 dark:text-purple-700 bg-white whitespace-nowrap hidden md:block">Mary Boles</h1>
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
        <div className="w-full md:w-2/3 pb-4">
          <p className="mr-2 text-lg font-normal">Hi! I'm Mary, a software engineer transitioning from a career in the education field. Movtivated by my passion for creativity and <span className="font-bold">problem-solving,</span> I decided to pursue development focusing on building impactful web applications.<br/><br/>
          With a experience in <span className="font-bold">JavaScript, React, Next.js, Tailwind CSS,</span> I create solutions that merge functionality and clean UI design. My background in education has honed my skills in communication, project management, analytical thinking, which are invaluable to understanding user needs and collaborating with teams.<br/><br/>
          Outside of coding, I spend my time enjoying DJing, collecting vinyl records + CD's, watching films and sports, and listening to podcasts!<br/><br/>
          Feel free to get in touch if you'd like to collaborate, or simply <a href="#contact"><span className="underline hover:text-blue-400 dark:hover:text-purple-400">connect</span></a>!
          </p>
        </div>
        <div className="w-full p-8 md:w-1/4 min-w-[200px] bg-white bg-opacity-5 rounded-lg ">
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
          </div>
      </div>
    </div>
    </section>

    <section className="grid grid-rows-[20px_1fr_20px]  min-h-screen py-16 px-8 sm:p-20 " id="works">
     <h2 className="font-syne">W<span className="text-gray-500 dark:text-purple-700">O</span>RKS</h2>
      <div className="px-4 mt-20 flex flex-col border-2 border-white dark:border-none bg-white bg-opacity-5 rounded-md sm:flex-row">
          <div className="my-auto">
            <h2 className="p-6 text-center"><span className="text-green-600 font-extrabold">flow</span>mode</h2>
          </div>
          <div className="p-4">
            <p className="mt-12 text-xl">Flowmode is a web-based timer that integrates with Spotify to help users maintain productivity while preventing burnout. By encouraging regular breaks through customizable Flow and Rest intervals, <span className="text-green-600 font-extrabold">flow</span>mode helps users work for longer periods without fatigue. Users can choose audio to accompany both Flow and Rest phases, making the experience enjoyable and effective.
            </p>

            <ProjectDetails />

            <div className="flex mt-4 mb-2">
              <a href="https://github.com/ma-boles/flowmode/tree/main/my-nextjs-app" 
              target="_blank"
              rel="noopener noreferrer"
              >
              <button className="px-8 py-2 border border-white dark:border-gray-500 rounded-md hover:bg-gray-500">Code</button>
              </a>
              <button className="px-8 py-2 mx-2  bg-green-700 rounded-md hover:bg-green-600">Live</button>
            </div>
          </div>
      </div>
    </section>

    <section className="grid grid-rows-[20px_1fr_20px]  min-h-screen relative py-16 px-8 sm:p-20" id="contact">
    <Image 
      src="/images/background-blocks.svg"
      alt="background"
      layout="fill"
      objectFit="cover"
      className="z-0 grayscale opacity-20"
      style={{ filter: "grayscale(100%)" }}
      />
      <div className="sm:items-start text-center sm:text-left">
        <h1 className="p-1">GET IN <span className=" text-gray-500 dark:text-purple-600 ">TOUCH</span></h1><br/>
        <h3>I'm Excited to Bring My Skills to Your Team!</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex py-24 px-12 sm:p-20 justify-between">
        <div className="text-left">
          <h4 className="text-gray-400 dark:text-purple-400">EMAIL</h4>
          <p className="text-lg font-semibold">email@gmail.com</p>
        </div>
        <div className="text-left">
          <h4 className="pb-1 text-gray-400 dark:text-purple-400">SOCIAL</h4>
          <div className="flex px-1 justify-between">
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
                <div className="invert">
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
    </>
  );
}
