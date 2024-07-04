// // import React from 'react'

// // import javascript from "../../assets/javascript.png";
// // import reactImage from "../../assets/react.png";
// // import node from "../../assets/node.png";
// // import ProjectsCard from './ProjectsCard';
// // import { BsGithub } from 'react-icons/bs';
// // import { FaGlobe } from 'react-icons/fa';

// // const Projects = () => {
// //   return (
// //     <section
// //       id="projects"
// //       className="w-full pl-4 py-20 border-b-[1px] border-b-black"
// //     >
// //       <div>
// //         <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
// //           Projects
// //         </p>
// //         <p className="py-6 text-gray-400">These are the technologies I've worked with</p>
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

// //         <div className="w-full bg-[#35463552] p-4 xl:px-12 h-auto  xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
// //           <div className="w-full h-[80%] overflow-hidden rounded-lg">
// //             <img
// //               className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
// //               src={node}
// //               alt="src"
// //             />
// //           </div>
// //           <div className="w-full mt-5 flex flex-col  gap-6">
// //             <div>

// //              <div className='flex justify-between'>
// //              <h3 className="text-base uppercase font-normal">
// //                 Toursid Guide Website
// //               </h3>
// //               <button className="btn btn-xs">


// //                 Live Link
// //               </button>
// //              </div>
// //               {/* <div className="flex gap-2">
// //               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
// //                 <BsGithub />
// //               </span>
// //               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
// //                 <FaGlobe />
// //               </span>
// //             </div> */}

// //               <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
// //                 Your go-to online resource for exploring Bangladesh, offering tailored features for tourists, guides, and admins.
// //               </p>
// //               <div className='flex justify-between mt-1'>
// //                 <button className="btn btn-xs">

// //                   <BsGithub></BsGithub>
// //                   Client-Github
// //                 </button>
// //                 <button className="btn btn-xs">

// //                   <BsGithub></BsGithub>
// //                   Client-Github
// //                 </button>

// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Projects



import React from 'react';
import javascript from "../../assets/javascript.png";
import tourista from "../../assets/projectsImage/screencapture-tourista-81113-web-app-2024-07-04-18_05_29.png"
import electron from "../../assets/projectsImage/screencapture-electronic-repair-house-web-app-allservices-2024-07-04-19_39_01.png"
import reactImage from "../../assets/react.png";
import node from "../../assets/node.png";
import { BsGithub } from 'react-icons/bs';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full pl-4 py-20 border-b-[1px] border-b-black"
    >
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Projects
        </p>
        <p className="py-6 text-gray-400">These are the technologies I've worked with</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <div className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <img
              className="w-full h-full overflow-y-auto  group-hover:scale-110 duration-300 cursor-pointer"
              src={tourista}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className='flex justify-between items-center'>
                <h3 className="text-base uppercase  font-bold">
                  Toursit Guide Website
                </h3>
                <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">

                  <a href="https://tourista-81113.web.app/" target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Explore Bangladesh with Tourista. Tailored features enhance travel planning for tourists, guides, and admins, ensuring the best experiences for you.
              </p>
              <div className='flex justify-between mt-1'>
                <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a12-tourista-client" target='_blank'>
                    Client-Github
                  </a>
                </button>
                <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub /> <a href="https://github.com/RobiulIslam08/a12-tourista-server" target='_blank'> Server-Github</a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mx-2">HTML</span>
            <span className='border-r '></span>
            <span className="mx-2">CSS</span>
            <span className='border-r'></span>
            <span className="mx-2">React</span>
            <span className='border-r'></span>
            <span className="mx-2">Mongodb</span>
            <span className='border-r'></span>
            <span className="mx-2">Enpress</span>
            <span className='border-r'></span>
            <span className="mx-2">Node</span>
            <span className='border-r'></span>
            <span className="mx-2">Firebase</span>


          </div>
        </div>
        <div className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <img
              className="w-full h-full overflow-y-auto  group-hover:scale-110 duration-300 cursor-pointer"
              src={electron}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className='flex items-center'>
                <h3 className="text-base w-3/4 uppercase  font-bold">
                  Electron Reapair
                </h3>
                <button className="text-xs  bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">

                  <a href="https://electronic-repair-house.web.app/" target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Build a responsive service-sharing app with user registration, service management, booking, private routes, search, and a theme toggle for seamless, personalized experiences.
              </p>
              <div className='flex justify-between mt-1'>
                <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a11-electron-repair-house-client" target='_blank'>
                    Client-Github
                  </a>
                </button>
                <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub /> <a href="https://github.com/RobiulIslam08/a11-electronic-repair-house-server" target='_blank'> Server-Github</a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mx-2">HTML</span>
            <span className='border-r '></span>
            <span className="mx-2">CSS</span>
            <span className='border-r'></span>
            <span className="mx-2">React</span>
            <span className='border-r'></span>
            <span className="mx-2">Mongodb</span>
            <span className='border-r'></span>
            <span className="mx-2">Express</span>
            <span className='border-r'></span>
            <span className="mx-2">Node</span>
            <span className='border-r'></span>
            <span className="mx-2">Firebase</span>


          </div>
        </div>
        <div className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <img
              className="w-full h-full overflow-y-auto  group-hover:scale-110 duration-300 cursor-pointer"
              src={tourista}
              alt="src"
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className='flex justify-between items-center'>
                <h3 className="text-base uppercase  font-bold">
                  Toursim Management
                </h3>
                <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">

                  <a href="https://a10-tourism-management-websit.web.app" target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              Built a responsive tourism management site for Southeast Asia featuring dynamic displays, user authentication, CRUD operations, and theme options with advanced functionality
              </p>
              <div className='flex justify-between mt-1'>
                <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a10-tourism-management-website-client" target='_blank'>
                    Client-Github
                  </a>
                </button>
                <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub /> <a href="https://github.com/RobiulIslam08/a10-tourism-management-website-server" target='_blank'> Server-Github</a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mx-2">HTML</span>
            <span className='border-r '></span>
            <span className="mx-2">CSS</span>
            <span className='border-r'></span>
            <span className="mx-2">React</span>
            <span className='border-r'></span>
            <span className="mx-2">Mongodb</span>
            <span className='border-r'></span>
            <span className="mx-2">Enpress</span>
            <span className='border-r'></span>
            <span className="mx-2">Node</span>
            <span className='border-r'></span>
            <span className="mx-2">Firebase</span>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;



