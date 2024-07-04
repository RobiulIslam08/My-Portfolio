

const Education = () => {
	return (
		<div
			name="education"
			className="bg-black pl-4 pt-28 lg:pt-32"
		>
			<div className="max-w-11/12 mx-auto flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Education
					</p>
					
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					<div

						className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-lg border-lime-500 border-r border-l`}
					>
						<p>Robiu</p>
						<p className="mt-4 ">Dedekjlkds</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;