

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
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import { ToastContainer } from "react-toastify";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";

function App() {
    return (
        <div className="bg-black">
            <Navbar />
            <ToastContainer></ToastContainer>
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
                    <Projects></Projects>
                </section>
                <section id="education">
                    <Education></Education>
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <section>
                    <Footer></Footer>
                </section>
                <section>
                    <SocialLinks></SocialLinks>
                </section>
            </div>
        </div>
    );
}

export default App;
