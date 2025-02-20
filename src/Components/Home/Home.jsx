/* eslint-disable react/no-unescaped-entities */
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import resume from '../../assets/_Developer Resume of Rabiul Islam.pdf'
const Home = () => {
	const handleType = (count) => {
		// access word count number
		console.log(count)
	}


	const handleDone = () => {
		console.log(`Done after 5 loops!`)
	}
	return (
		<div className="overflow-x-hidden">
			<div className="hero pt-4 lg:pt-10 min-h-screen">
				<div className="hero-content flex-col lg:mt-2 mt-20  lg:flex-row-reverse">
					<motion.img
						initial={{ x: 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}

						transition={{ delay: 0.2, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
						src="https://i.ibb.co/Y3ckWkX/404683024-1546109742911808-7231749869021515754-n-removebg-preview.png"
						className="max-w-xs rounded-full " />
					<div >
						<div >
							<motion.h1
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}

								transition={{ delay: 0.2, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
								className="lg:text-5xl text-4xl font-bold mt-4 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 bg-clip-text text-transparent">
								Rabiul Islam
							</motion.h1>
							<motion.h1
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}

								transition={{ delay: 0.2, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
								className="lg:text-3xl text-2xl font-bold mt-4">I'm <span className="text-pink-300"><Typewriter
									words={['Frontend Website Developer']}
									loop={true}
									cursor
									cursorStyle='_'
									typeSpeed={70}
									deleteSpeed={50}
									delaySpeed={1000}
									onLoopDone={handleDone}
									onType={handleType}

								/></span></motion.h1>
							<motion.p
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}

								transition={{ delay: 0.2, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
								className="py-6 md:w-2/3">
								I am a passionate Junior Web Developer with a strong foundation in HTML, CSS, Tailwind CSS , JavaScript and React Js . I enjoy creating interactive, user-friendly websites and have experience with React. I aim to learn new skills and contribute to innovative projects.
							</motion.p>
						</div>
						<motion.a
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}

							transition={{ delay: 0.4, x: { type: "spring", stiffness: 50 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
							href={resume} download="_Developer Resume of Rabiul Islam" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
							<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
							<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">

								<FaArrowDown />
							</span>
							<span className="relative">Resume</span>
							<FaArrowDown className="ml-1" />


						</motion.a>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Home;