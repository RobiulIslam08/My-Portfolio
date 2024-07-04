

// import Contact from "./Components/Contact/Contact"
// import Experience from "./Components/Experience/Experience"
// import Home from "./Components/Home/Home"
// import Navbar from "./Components/Navbar/Navbar"



// function App() {


//   return (
//     <div className="bg-black">
//       <Navbar></Navbar>
//       <div className="w-11/12 mx-auto">
//      <Home></Home>
//       <Experience></Experience>
//       <Contact></Contact>
      
//       </div>
      

//     </div>
//   )
// }

// export default App
import Navbar from "./Components/Navbar/Navbar";

import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="bg-black">
            <Navbar />
            <div className="w-11/12 mx-auto">
                <section id="home">
                    <Home></Home>
                </section>
                <section id="about">
                    <About></About>
                </section>
                <section id="skills">
                    <Experience />
                </section>
                <section id="project">
                    {/* Project Component */}
                </section>
                <section id="education">
                    {/* Education Component */}
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </div>
    );
}

export default App;
