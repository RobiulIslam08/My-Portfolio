

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white"
    >
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl text-gray-400 mt-20">
		I am Robiul Islam, a dedicated frontend web developer with a continuous passion for learning and adapting to new technologies. My skills encompass HTML, CSS, JavaScript, React.js, Express.js, and MongoDB, and I am currently diving into Next.js to further enhance my capabilities. Though I lack formal job experience, I am committed to integrating myself into a dynamic company environment and contributing effectively.
        </p>

        <br />

        <p className="text-xl text-gray-400">
		My meticulous approach to work ensures that I consistently deliver high-quality results. I thrive on challenges and am always eager to expand my skill set. I am confident that my dedication and enthusiasm will make me a valuable asset to any team.
        </p>
      </div>
    </div>
  );
};

export default About;