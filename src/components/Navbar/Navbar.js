import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const handleClick = () => {
        const element = document.querySelector("#navContent");
        element.classList.toggle("block");
        element.classList.toggle("hidden");
      };
    
      return (
        <div>
            <nav className="w-screen bg-white lg:px-10 sm:px-10 px-2 sm:flex justify-between border-gray-600 z-10">
                <div className="flex px-4 justify-between sm:py-0 pb-1">
                    <img
                     src="https://www.ravilamkoti.codes/static/b7742c4d36a8aad0eae9e469b8af55d5/55abd/logo.png"
                    alt="Logo"
                    className="h-12"
                    />
            
                    <button
                    className="text-blue-700 text-3xl sm:hidden block focus:outline-none"
                    onClick={handleClick}
                    >
                    &#9776;
                    </button>
                </div>
        
            <ul className="hidden sm:flex cursor-pointer" id="navContent">
                <li className="py-5 px-5 hover:text-blue-300 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent text-blue-700">
                <Link to="/">
                    <p className="antialiased">Home</p>
                </Link>
                
                </li>
                <li className="text-blue-700 py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="/AboutPage">
                    <p className="antialiased">About Us</p>
                </Link>
                </li>
                <li className="text-blue-700 py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="" id="dropdown" >
                    <p className="antialiased" >Services</p>
                    <div className="dropdown-content">
                        <p>Web design and development</p>
                        <p>Business process automation</p>
                        <p>Hardware sales</p>
                        <p>ICT training</p>
                    </div>
                </Link>
                
                </li>
                <li className="text-blue-700 py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="/Testimonialpage">
                    <p className="antialiased">Testimonials</p>
                </Link>
                
                </li>
                <li className="text-blue-700 py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="/Faq">
                    <p className="antialiased">FAQ</p>
                </Link>
                
                </li>
                <li className="text-gray-400 py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="/Contactpage">
                    <p className="antialiased">Contact Us</p>
                </Link>
                </li>
                <li className="text-blue-700 py-4 px-5 sm:border-b-2 border-transparent hover:text-blue-600 sm:hover:text-blue-600 transition hover:bg-gray-900 bg-blue-300 rounded-xl m-1 duration-200">
                    <Link to="/">
                        <p className="antialiased">Request a quote</p>
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
      );
}
export default Navbar;