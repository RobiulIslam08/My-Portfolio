
import {motion} from "framer-motion"
const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-28 lg:pt-32 overflow-x-hidden text-white"
    >
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{ delay: 0.2, x: { type: "spring", }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.4 }}
         className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </motion.div>

        <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}

        transition={{ delay: 0.2, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
         className="text-xl text-gray-400 mt-20 ">
		I am Robiul Islam, a dedicated frontend web developer with a continuous passion for learning and adapting to new technologies. My skills encompass HTML, CSS, JavaScript, React.js, Express.js, and MongoDB, and I am currently diving into Next.js to further enhance my capabilities. Though I lack formal job experience, I am committed to integrating myself into a dynamic company environment and contributing effectively.
        </motion.p>

        <br />

        <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}

        transition={{ delay: 1, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
         className="text-xl text-gray-400 ">
		My meticulous approach to work ensures that I consistently deliver high-quality results. I thrive on challenges and am always eager to expand my skill set. I am confident that my dedication and enthusiasm will make me a valuable asset to any team.
        </motion.p>
      </div>
    </div>
  );
};

export default About;