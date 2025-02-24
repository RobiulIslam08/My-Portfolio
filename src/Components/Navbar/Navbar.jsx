
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: 'Education'
        },
        {
            id: 4,
            link: 'Skills'
        },
        {
            id: 5,
            link: 'Project'
        },
       
        {
            id: 6,
            link: 'Contact'
        },
    ];

    return (
        <div className="flex justify-between items-center w-full  h-20 px-4 text-white opacity-80 z-20 fixed bg-black">
            <div>
                <h1 className="text-5xl font-signature ml-2">Robiul</h1>
            </div>

            <ul className="hidden md:flex ">
                {
                    links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize hover:text-indigo-500  font-medium text-gray-500 hover:scale-110 duration-300 transition-all">
                            <Link to={link.toLowerCase()} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer text-gray-400 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {
                nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                        {links.map(({ id, link }) => (
                            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4x hover:text-indigo-500">
                                <Link to={link.toLowerCase()} smooth duration={500} onClick={() => setNav(false)}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default NavBar;
