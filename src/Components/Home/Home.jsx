import { FaArrowDown } from "react-icons/fa";


import resume from '../../assets/Rabiul Resume.pdf'
const Home = () => {
	return (
		<div >
			<div className="hero pt-4 lg:pt-10 min-h-screen">
				<div className="hero-content flex-col lg:mt-2 mt-20  lg:flex-row-reverse">
					<img
						src="https://i.ibb.co/Y3ckWkX/404683024-1546109742911808-7231749869021515754-n-removebg-preview.png"
						className="max-w-xs rounded-full " />
					<div >
						<div >
						<h1 className="lg:text-5xl text-4xl font-bold mt-4">Rabiul Islam</h1>
						<h1 className="lg:text-3xl text-2xl font-bold mt-4">Frontend Website Developer</h1>
						<p className="py-6 md:w-2/3">
							I am a passionate Junior Web Developer with a strong foundation in HTML, CSS, Tailwind CSS , JavaScript and React Js . I enjoy creating interactive, user-friendly websites and have experience with React. I aim to learn new skills and contribute to innovative projects.
						</p>
						</div>
						<a href={resume} download="Rabiul_Resume.pdf" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
							<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
							<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
								
							<FaArrowDown />
							</span>
							<span className="relative">Resume</span>
							<FaArrowDown className="ml-1"/>
							

						</a>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Home;