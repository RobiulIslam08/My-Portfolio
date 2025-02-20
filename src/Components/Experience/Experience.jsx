

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import node from "../../assets/node.png";
import MongoDB from "../../assets/MongoDB-Emblem.jpg";
import {motion} from "framer-motion"
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import TypeScript from "../../assets/typescript.png";
import Express from "../../assets/express.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React Js",
      style: "shadow-pink-600",
    },
    {
      id: 6,
      src: node,
      title: "Node Js",
      style: "shadow-fuchsia-600",
    },
    {
      id: 7,
      src: Express,
      title: "Express Js",
      style: "shadow-fuchsia-400",
    },
   
    {
      id: 8,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-cyan-500",
    },
    {
      id: 9,
      src: TypeScript,
      title: "TypeScript",
      style: "shadow-fuchsia-500",
    },

    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-emerald-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-black overflow-x-hidden pt-28 pl-4 lg:pt-32"
    >
      <div className="max-w-11/12 mx-auto flex flex-col justify-center w-full h-full text-white">
        <motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{ delay: 0.2, x: { type: "spring", }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.4 }}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </motion.div>
          <p className="py-6 text-gray-400">These are the technologies I've worked with</p>

        <motion.div 
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}

        transition={{ delay: 0.2, x: { type: "spring", }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
        className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;