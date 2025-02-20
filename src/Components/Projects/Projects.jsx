// /* eslint-disable react/no-unescaped-entities */

// import {motion} from "framer-motion"

// import tourista from "../../assets/projectsImage/screencapture-tourista-81113-web-app-2024-07-04-18_05_29.png"
// import tourisManagement from "../../assets/projectsImage/screencapture-localhost-5173-2024-07-07-12_54_17 (1).png"
// import electron from "../../assets/projectsImage/screencapture-electronic-repair-house-web-app-allservices-2024-07-04-19_39_01.png"

// import { BsGithub } from 'react-icons/bs';

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full overflow-x-hidden pl-4 py-20 border-b-[1px] border-b-black"
//     >
//       <motion.div
//       initial={{ y: -150, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}

//       transition={{ delay: 0.2, x: { type: "spring", }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.4 }}
//       >
//         <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//           Projects
//         </p>
//         <p className="py-6 text-gray-400">These are the technologies I've worked with</p>
//       </motion.div>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
//         <motion.div
//         initial={{x:-100, opacity:0}}
// 				whileInView={{x:0, opacity:1}}
				
// 				transition={{delay:0.2, x:{type:"spring", stiffness:50}, opacity:{duration:1},ease:"easeIn", duration:1}}
//          className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
//           <div className="w-full h-60 overflow-hidden rounded-lg">
//             <img
//               className="w-full h-full overflow-y-auto  group-hover:scale-110 duration-300 cursor-pointer"
//               src={tourista}
//               alt="src"
//             />
//           </div>
//           <div className="w-full mt-5 flex flex-col gap-6">
//             <div>
//               <div className='flex justify-between items-center'>
//                 <h3 className="text-base uppercase  font-bold">
//                   Toursit Guide Website
//                 </h3>
//                 <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">

//                   <a href="https://tourista-81113.web.app/" target='_blank'>Live Link</a>
//                 </button>
//               </div>
//               <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
//                 Explore Bangladesh with Tourista. Tailored features enhance travel planning for tourists, guides, and admins, ensuring the best experiences for you.
//               </p>
//               <div className='flex justify-between mt-1'>
//                 <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub />
//                   <a href="https://github.com/RobiulIslam08/a12-tourista-client" target='_blank'>
//                     Client-Github
//                   </a>
//                 </button>
//                 <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub /> <a href="https://github.com/RobiulIslam08/a12-tourista-server" target='_blank'> Server-Github</a>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <span className="mx-2">HTML</span>
//             <span className='border-r '></span>
//             <span className="mx-2">CSS</span>
//             <span className='border-r'></span>
//             <span className="mx-2">React</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Mongodb</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Enpress</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Node</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Firebase</span>


//           </div>
//         </motion.div>
//         <div className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
//           <div className="w-full h-60 overflow-hidden rounded-lg">
//             <img
//               className="w-full h-full overflow-y-auto  group-hover:scale-110 duration-300 cursor-pointer"
//               src={electron}
//               alt="src"
//             />
//           </div>
//           <div className="w-full mt-5 flex flex-col gap-6">
//             <div>
//               <div className='flex items-center'>
//                 <h3 className="text-base w-3/4 uppercase  font-bold">
//                   Electron Reapair
//                 </h3>
//                 <button className="text-xs  bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">

//                   <a href="https://electronic-repair-house.web.app/" target='_blank'>Live Link</a>
//                 </button>
//               </div>
//               <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
//                 Build a responsive service-sharing app with user registration, service management, booking, private routes, search, and a theme toggle for seamless, personalized experiences.
//               </p>
//               <div className='flex justify-between mt-1'>
//                 <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub />
//                   <a href="https://github.com/RobiulIslam08/a11-electron-repair-house-client" target='_blank'>
//                     Client-Github
//                   </a>
//                 </button>
//                 <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub /> <a href="https://github.com/RobiulIslam08/a11-electronic-repair-house-server" target='_blank'> Server-Github</a>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <span className="mx-2">HTML</span>
//             <span className='border-r '></span>
//             <span className="mx-2">CSS</span>
//             <span className='border-r'></span>
//             <span className="mx-2">React</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Mongodb</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Express</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Node</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Firebase</span>


//           </div>
//         </div>
//         <motion.div
//         initial={{x:100, opacity:0}}
// 				whileInView={{x:0, opacity:1}}
				
// 				transition={{delay:0.2, x:{type:"spring", stiffness:50}, opacity:{duration:1},ease:"easeIn", duration:1}}
//          className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
//           <div className="w-full h-60 overflow-hidden rounded-lg">
//             <img
//               className="w-full h-full overflow-y-auto  group-hover:scale-110 duration-300 cursor-pointer"
//               src={tourisManagement}
//               alt="src"
//             />
//           </div>
//           <div className="w-full mt-5 flex flex-col gap-6">
//             <div>
//               <div className='flex justify-between items-center'>
//                 <h3 className="text-base uppercase  font-bold">
//                   Toursim Management
//                 </h3>
//                 <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">

//                   <a href="https://a10-tourism-management-websit.web.app" target='_blank'>Live Link</a>
//                 </button>
//               </div>
//               <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
//               Built a responsive tourism management site for Southeast Asia featuring dynamic displays, user authentication, CRUD operations, and theme options with advanced functionality
//               </p>
//               <div className='flex justify-between mt-1'>
//                 <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub />
//                   <a href="https://github.com/RobiulIslam08/a10-tourism-management-website-client" target='_blank'>
//                     Client-Github
//                   </a>
//                 </button>
//                 <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub /> <a href="https://github.com/RobiulIslam08/a10-tourism-management-website-server" target='_blank'> Server-Github</a>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <span className="mx-2">HTML</span>
//             <span className='border-r '></span>
//             <span className="mx-2">CSS</span>
//             <span className='border-r'></span>
//             <span className="mx-2">React</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Mongodb</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Enpress</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Node</span>
//             <span className='border-r'></span>
//             <span className="mx-2">Firebase</span>


//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Projects;



/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { BsGithub } from 'react-icons/bs';

import tourista from "../../assets/projectsImage/screencapture-tourista-81113-web-app-2024-07-04-18_05_29.png";
import tourisManagement from "../../assets/projectsImage/screencapture-localhost-5173-2024-07-07-12_54_17 (1).png";
import electron from "../../assets/projectsImage/screencapture-electronic-repair-house-web-app-allservices-2024-07-04-19_39_01.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full overflow-x-hidden pl-4 py-20 border-b-[1px] border-b-black"
    >
      <motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, x: { type: "spring" }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.4 }}
      >
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Projects
        </p>
        <p className="py-6 text-gray-400">These are the technologies I've worked with</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
          className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden"
        >
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <div className="h-[220px] overflow-y-scroll">
              <img
                className="h-auto w-full group-hover:scale-110 duration-300 cursor-pointer"
                src={tourista}
                alt="Tourista"
              />
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base uppercase font-bold">Tourist Guide Website</h3>
                <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">
                  <a href="https://tourista-81113.web.app/" target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Explore Bangladesh with Tourista. Tailored features enhance travel planning for tourists, guides, and admins, ensuring the best experiences for you.
              </p>
              <div className="flex justify-between mt-1">
                <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a12-tourista-client" target='_blank'>
                    Client-Github
                  </a>
                </button>
                <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a12-tourista-server" target='_blank'> Server-Github</a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mx-2">HTML</span>
            <span className="border-r"></span>
            <span className="mx-2">CSS</span>
            <span className="border-r"></span>
            <span className="mx-2">React</span>
            <span className="border-r"></span>
            <span className="mx-2">MongoDB</span>
            <span className="border-r"></span>
            <span className="mx-2">Express</span>
            <span className="border-r"></span>
            <span className="mx-2">Node</span>
            <span className="border-r"></span>
            <span className="mx-2">Firebase</span>
          </div>
        </motion.div>
        <div className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <div className="h-[220px] overflow-y-scroll">
              <img
                className="h-auto w-full group-hover:scale-110 duration-300 cursor-pointer"
                src={electron}
                alt="Electron"
              />
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex items-center">
                <h3 className="text-base w-3/4 uppercase font-bold">Electron Repair</h3>
                <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">
                  <a href="https://electronic-repair-house.web.app/" target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Build a responsive service-sharing app with user registration, service management, booking, private routes, search, and a theme toggle for seamless, personalized experiences.
              </p>
              <div className="flex justify-between mt-1">
                <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a11-electron-repair-house-client" target='_blank'>
                    Client-Github
                  </a>
                </button>
                <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a11-electronic-repair-house-server" target='_blank'> Server-Github</a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mx-2">HTML</span>
            <span className="border-r"></span>
            <span className="mx-2">CSS</span>
            <span className="border-r"></span>
            <span className="mx-2">React</span>
            <span className="border-r"></span>
            <span className="mx-2">MongoDB</span>
            <span className="border-r"></span>
            <span className="mx-2">Express</span>
            <span className="border-r"></span>
            <span className="mx-2">Node</span>
            <span className="border-r"></span>
            <span className="mx-2">Firebase</span>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
          className="w-full bg-[#3546352a] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden"
        >
          <div className="w-full h-60 overflow-hidden rounded-lg">
            <div className="h-[220px] overflow-y-scroll">
              <img
                className="h-auto w-full group-hover:scale-110 duration-300 cursor-pointer"
                src={tourisManagement}
                alt="Tourism Management"
              />
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base uppercase font-bold">Tourism Management</h3>
                <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">
                  <a href="https://a10-tourism-management-websit.web.app" target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Built a responsive tourism management site for Southeast Asia featuring dynamic displays, user authentication, CRUD operations, and theme options with advanced functionality
              </p>
              <div className="flex justify-between mt-1">
                <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a10-tourism-management-website-client" target='_blank'>
                    Client-Github
                  </a>
                </button>
                <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
                  <BsGithub />
                  <a href="https://github.com/RobiulIslam08/a10-tourism-management-website-server" target='_blank'> Server-Github</a>
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-wrap text-center text-gray-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="mx-2">HTML</span>
            <span className="border-r"></span>
            <span className="mx-2">CSS</span>
            <span className="border-r"></span>
            <span className="mx-2">React</span>
            <span className="border-r"></span>
            <span className="mx-2">MongoDB</span>
            <span className="border-r"></span>
            <span className="mx-2">Express</span>
            <span className="border-r"></span>
            <span className="mx-2">Node</span>
            <span className="border-r"></span>
            <span className="mx-2">Firebase</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
