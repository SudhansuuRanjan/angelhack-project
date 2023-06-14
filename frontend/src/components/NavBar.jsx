import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import ScrollStatus from "./scroll/ScrollStatus";


const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 0) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return (
        <div className="fixed top-0 z-50 w-full">
            <div className={`w-[100%] fixed items-center justify-center ${colorChange && " bg-black transition-all delay-100 ease-in-out bg-opacity-20 backdrop-blur-md border-gray-800 shadow-lg"}`}>
                <div className="flex items-center justify-between py-3 m-auto text-lg px-8">
                    <div className="flex items-center">
                        <Link style={{ textDecoration: "none" }} to="/">
                            <img src="/images/logo.png" alt="logo" className="h-14" />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="md:flex gap-8 hidden items-center text-[0.95rem]">
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/about">
                                    {({ isActive }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-purple-500 ${isActive ? "text-sky-500 font-medium" : "text-yellow-100"}`}>Home</span>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/events">
                                    {({ isActive }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-purple-500 ${isActive ? "text-sky-500 font-medium" : "text-yellow-100"}`}>About</span>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/projects">
                                    {({ isActive }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-purple-500 ${isActive ? "text-sky-500 font-medium" : "text-yellow-100"}`}>Blogs</span>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/team">
                                    {({ isActive }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-purple-500 ${isActive ? "text-sky-500 font-medium" : "text-yellow-100"}`}>Team</span>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/gallery">
                                    {({ isActive }) => (
                                        <span className={`hover:underline underline-offset-4 decoration-purple-500 ${isActive ? "text-sky-500 font-medium" : "text-yellow-100"}`}>NFT Gallery</span>
                                    )}
                                </NavLink>
                            </li>
                        </ul>

                        <button className="bg-violet-600 px-4 py-2 text-sm rounded-md font-medium ml-6 mr-4">
                            CONNECT 🔒
                        </button>


                        <button
                            type="button"
                            onClick={() => {
                                if (menu == false) {
                                    setMenu(true);
                                } else {
                                    setMenu(false);
                                }
                            }}
                            className="animate-pulse md:hidden border focus:ring-[2.5px] focus:outline-none font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center focus:ring-gray-500 bg-gray-800 border-gray-900 text-yellow-100 hover:bg-gray-700 mr-2"
                        >
                            {!menu ? <HiMenuAlt3 /> : <FiX />}
                        </button>
                    </div>
                </div>
                {menu && (
                    <div className="md:hidden fixed top-[4rem] right-0 rounded-xl w-[12rem] py-2 mr-5 shadow-md text-yellow-100 bg-gray-900 border-gray-700 border">
                        <ul>
                            <li>
                                <NavLink style={{ textDecoration: "none" }} to="/">
                                    <button
                                        onClick={() => {
                                            setMenu(false);
                                            // setFocus(0);
                                        }}
                                        className="hover:underline hover:border-blue-300 border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Home
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <Link style={{ textDecoration: "none" }} to="/about">
                                    <button
                                        onClick={() => {
                                            setMenu(false);
                                            // setFocus(0);
                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        About
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: "none" }} to="/events">
                                    <button
                                        onClick={() => {
                                            setMenu(false);
                                            // setFocus(0);
                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Events
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: "none" }} to="/projects">
                                    <button
                                        onClick={() => {
                                            setMenu(false);

                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Projects
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: "none" }} to="/gallery">
                                    <button
                                        onClick={() => {
                                            setMenu(false);

                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Gallery
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: "none" }} to="/team">
                                    <button
                                        onClick={() => {
                                            setMenu(false);

                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Team
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link className="visited:text-yellow-100 text-yellow-100" style={{ textDecoration: "none" }} to="/news">
                                    <button
                                        onClick={() => {
                                            setMenu(false);

                                        }}
                                        className="hover:underline hover:border-blue-300  border-4 border-gray-900 py-1.5 w-[100%] pl-4 cursor-pointer  hover:bg-gray-700 text-left"
                                    >
                                        Newsletter
                                    </button>
                                </Link>
                            </li>

                        </ul>
                    </div>
                )}
                <ScrollStatus />
            </div>
        </div>
    );
};

export default NavBar;