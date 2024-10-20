import ProjectDetails from "./components/ProjectDetails";
import Image from "next/image";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
  return (
    <>
    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen sm:p-20">
      <main className="font-syne flex flex-col gap-4 items-center sm:items-start">
          <h1 className="text-5xl font-extrabold">Software Engineer</h1>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <h2 className="text-4xl text-purple-300 font-extrabold">Creating innovative user-centric solutions</h2>
          </div>
        </main>
        <div className="row-start-4 flex flex-wrap justify-between">
          <h1 className="mt-36 text-7xl font-extrabold text-purple-700 bg-white">Mary Boles</h1>
          <div className="flex flex-col">
            <button className="px-4 py-4 w-40 text-xl font-semibold bg-purple-800 border-2 border-purple-800 rounded-md  transition-colors duration-300 ease-in-out hover:bg-purple-700">About</button>
            <button className="px-4 py-4 my-2 w-40 text-xl font-semibold bg-purple-700 border-2 border-purple-700 rounded-md  transition-colors duration-300 ease-in-out hover:bg-purple-600">View Works</button>
            <button className="py-4 w-40 text-xl font-semibold border-2 border-white rounded-md transition-colors duration-300 ease-in-out hover:bg-purple-600">Get In Touch</button>
          </div>
        </div>
    </section>

<BackToTopButton />
    <section className="grid grid-rows-[20px_1fr_20px] min-h-screen bg-white bg-opacity-20 sm:p-20">
      <h1 className="font-syne text-5xl font-extrabold">ABOUT | <span className="text-purple-500">SKILLS</span></h1>
      <div className="font-syne flex mt-20 justify-between">
        <div className="w-2/3">
          <h2 className="mr-2 text-lg font-normal">Hi! I'm Mary, a software engineer transitioning from a career in the education field. Movtivated by my passion for creativity and problem-solving, I decided to pursue development focusing on building impactful web applications.<br/><br/>

          With a experience in JavaScript, React, Next.js, Tailwind CSS, I create solutions that merge functionality and clean UI design. My background in education has honed my skills in communication, project management, analytical thinking, which are invaluable to understanding user needs and collaborating with teams.<br/><br/>

          When I'm not coding, I spend my time enjoying DJing, collecting vinyl records + CD's, watching films and sports, and listening to podcasts!<br/><br/>
          Feel free to get in touch if you'd like to collaborate, or simply connect!
          </h2>
        </div>
        <div className="p-8 w-1/4 bg-white bg-opacity-10 rounded-lg ">
        <h2 className="pt-6 pb-4 text-2xl font-extrabold text-center">TOOLBOX</h2>
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

    <section className="grid grid-rows-[20px_1fr_20px]  min-h-screen sm:p-20 ">
     <h1 className="font-syne text-5xl font-extrabold">W<span className="text-purple-700">O</span>RKS</h1>
      <div className="px-4 mt-20 flex bg-white bg-opacity-5 rounded-md">
          <div className="my-auto">
            <p className="p-6 text-5xl"><span className="text-green-600 font-extrabold">flow</span>mode</p>
          </div>
          <div className="p-4">
            <p className="mt-12 text-xl">Flowmode is a web-based timer that integrates with Spotify to help users maintain productivity while preventing burnout. By encouraging regular breaks through customizable Flow and Rest intervals, <span className="text-green-600 font-extrabold">flow</span>mode helps users work for longer periods without fatigue. Users can choose audio to accompany both Flow and Rest phases, making the experience enjoyable and effective.
            </p>

            <ProjectDetails />

            <div className="flex mt-4 mb-2">
              <button className="px-8 py-2 border border-gray-500 rounded-md hover:bg-gray-500">Code</button>
              <button className="px-8 py-2 mx-2  bg-green-700 rounded-md hover:bg-green-600">Live</button>
            </div>
          </div>
      </div>
    </section>

    <section className="grid grid-rows-[20px_1fr_20px] bg-white bg-opacity-20 min-h-screen relative sm:p-20 ">
      <h1 className="p-1 text-7xl font-extrabold">GET IN <span className="text-purple-500">TOUCH</span><br/>
      <span className="text-4xl font-medium">Feel free to reach out if you have any questions or projects in mind!</span></h1>
      <div className="absolute bottom-0 left-0 right-0 flex p-20 justify-between">
        <div className="text-left">
          <h2 className="text-2xl font-bold">EMAIL</h2>
          <p className="text-lg font-semibold">email@gmail.com</p>
        </div>
        <div className="text-left">
          <h2 className="pb-1 text-2xl font-bold">SOCIAL</h2>
          <div className="flex px-1 justify-between">
            <a href="https://www.linkedin.com/in/mary-boles" 
              target="_blank"
              rel="noopener noreferrer">
                <div className="invert">
                  <Image 
                    src="/linkedin-brands-solid (1).svg"
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
                    src="/github-brands-solid (1).svg"
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
