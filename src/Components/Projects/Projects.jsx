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
                  
                  <a href="https://tourista-81113.web.app/"  target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Your go-to online resource for exploring Bangladesh, offering tailored features for tourists, guides, and admins.
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
                  
                  <a href="https://tourista-81113.web.app/"  target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Your go-to online resource for exploring Bangladesh, offering tailored features for tourists, guides, and admins.
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
                  
                  <a href="https://tourista-81113.web.app/"  target='_blank'>Live Link</a>
                </button>
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                Your go-to online resource for exploring Bangladesh, offering tailored features for tourists, guides, and admins.
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
      </div>
    </section>
  );
}

export default Projects;








// import React from 'react';
// import javascript from "../../assets/javascript.png";
// import tourista from "../../assets/projectsImage/screencapture-tourista-81113-web-app-2024-07-04-18_05_29.png";
// import reactImage from "../../assets/react.png";
// import node from "../../assets/node.png";
// import { BsGithub } from 'react-icons/bs';

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full pl-4 py-20 border-b-[1px] border-b-black"
//     >
//       <div>
//         <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//           Projects
//         </p>
//         <p className="py-6 text-gray-400">These are the technologies I've worked with</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
//         <div className="w-full bg-[#3546352d] p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 relative overflow-hidden">
//           <div className="w-full h-60 overflow-hidden rounded-lg">
//             <img
//               className="w-full h-full overflow-auto group-hover:scale-110 duration-300 cursor-pointer"
//               src={tourista}
//               alt="src"
//             />
//           </div>
//           <div className="w-full mt-5 flex flex-col gap-6">
//             <div>
//               <div className='flex justify-between items-center'>
//                 <h3 className="text-base uppercase font-normal">
//                   Toursid Guide Website
//                 </h3>
//                 <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition duration-300">
//                   Live Link
//                 </button>
//               </div>
//               <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
//                 Your go-to online resource for exploring Bangladesh, offering tailored features for tourists, guides, and admins.
//               </p>
//               <div className='flex justify-between mt-1'>
//                 <button className="text-xs bg-indigo-800 text-white px-2 py-1 rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub /> Client-Github
//                 </button>
//                 <button className="text-xs bg-indigo-800 px-2 py-1 text-white rounded hover:bg-indigo-600 transition duration-300 flex items-center gap-1">
//                   <BsGithub /> Server-Github
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-0 flex items-center justify-center  text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="flex flex-wrap justify-center items-center text-gray-400">
//               <span className="mx-2">HTML</span>
//               <span className="mx-2">CSS</span>
//               <span className="mx-2">JavaScript</span>
//               <span className="mx-2">HTML</span>
//               <span className="mx-2">CSS</span>
//               <span className="mx-2">JavaScript</span>
//               <span className="mx-2">HTML</span>
//               <span className="mx-2">CSS</span>
//               <span className="mx-2">JavaScript</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
