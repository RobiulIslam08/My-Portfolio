
import {motion} from "framer-motion"
const Education = () => {
	return (
		<div
			name="education"
			className="bg-black overflow-x-hidden overflow-y-hidden pl-4 pt-28 lg:pt-32"
		>
			<div className="max-w-11/12 mx-auto flex flex-col justify-center w-full h-full text-white">
				<motion.div
				initial={{ y: -150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
		
				transition={{ delay: 0.2, x: { type: "spring", }, opacity: { duration: 1 }, ease: "easeIn", duration: 0.4 }}
				>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Education
					</p>
					
				</motion.div>

				<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 text-center py-8 px-12 ">
					
					<motion.div
					initial={{y:100, opacity:0}}
					whileInView={{y:0, opacity:1}}
					
					transition={{delay:0.2, y:{type:"spring", stiffness:50}, opacity:{duration:1}, duration:1}}

						className={`shadow-md text-left pl-4 space-y-1  hover:scale-105 duration-500 py-2 rounded-lg border-lime-500 border-r border-l`}
					>
						<p className="font-bold text-2xl  text-gray-300">Coputer Science and Technology</p>
						<p className="text-gray-400">Diploma in Engineering</p>
						<p className="text-gray-400">Sherpur Polytechnic Institute</p>
						<p  className="text-gray-400">2021 - 2022</p>
					
					</motion.div>
					<motion.div
					initial={{x:100, opacity:0}}
					whileInView={{x:0, opacity:1}}
					
					transition={{delay:0.2, x:{type:"spring", stiffness:50,restDelta: 0.5 }, opacity:{duration:1}, duration:1}}

						className={`shadow-md text-left pl-4 space-y-1  hover:scale-105 duration-500 py-2 rounded-lg border-lime-500 border-r border-l`}
					>
						<p className="font-bold text-2xl text-gray-300">Secondary School  Certificate</p>
						<p className="text-gray-400">Rehana Idris Model Academy</p>
						<p className="text-gray-400">Studied science subjects, including physics, chemistry, biology, and mathematics.</p>
						<p  className="text-gray-400">2020 - 2021</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Education;