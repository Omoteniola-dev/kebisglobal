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
            <nav className="w-screen bg-green-700 lg:px-10 sm:px-10 px-2 sm:flex justify-between items-center border-b-1 border-gray-600 z-10">
                <div className="flex px-4 justify-between sm:py-0 pb-1">
                    <img
                     src="https://www.ravilamkoti.codes/static/b7742c4d36a8aad0eae9e469b8af55d5/55abd/logo.png"
                    alt="Logo"
                    className="h-12"
                    />
            
                    <button
                    className="text-blue-300 text-3xl sm:hidden block focus:outline-none"
                    onClick={handleClick}
                    >
                    &#9776;
                    </button>
                </div>
        
            <ul className="hidden sm:flex cursor-pointer" id="navContent">
                <li className="py-5 px-5 sm:border-b-2 border-blue-300 hover:text-blue-300 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent text-white">
                <Link to="/">
                    <p className="text-base antialiased">Home</p>
                </Link>
                
                </li>
                <li className="text-white py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="/About">
                    <p className="text-base antialiased">About Us</p>
                </Link>
                </li>
                <li className="text-white py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="" id="dropdown" >
                    <p className="text-base antialiased" >Services</p>
                    <div className="dropdown-content">
                        <p>Web development</p>
                        <p>App development</p>
                        <p>IT automation</p>
                    </div>
                </Link>
                
                </li>
                <li className="text-white py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="/Testimonialpage">
                    <p className="text-base antialiased">Testimonials</p>
                </Link>
                
                </li>
                <li className="text-white py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="/Faq">
                    <p className="text-base antialiased">FAQ</p>
                </Link>
                
                </li>
                <li className="text-white py-5 px-5 sm:border-b-2 border-transparent hover:text-blue-300 sm:hover:text-blue-300 transition hover:bg-gray-800 duration-200 sm:hover:bg-transparent">
                <Link to="">
                    <p className="text-base antialiased">Contact Us</p>
                </Link>
                </li>
            </ul>
            </nav>
        </div>
      );
}
export default Navbar;