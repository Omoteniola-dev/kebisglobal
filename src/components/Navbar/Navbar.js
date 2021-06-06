import React from "react";
import { Link } from "react-router-dom";

export const navLinks = [
    {"text": "Home", "link": "/"},
    {"text": "About", "link": "/about"},
    {"text": "Testimonials", "link": "/testimonials"},
    {"text": "FAQ", "link": "/faq"},
    {"text": "Contact", "link": "/contact"}
];


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
                     src=""
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
               {
                   navLinks.map((link, i) => {
                       return <li key={i} className="py-5 px-5 lg:hover:text-blue-300 transition duration-200 text-blue-700">
                                    <Link to={link.link}>
                                        <p className="antialiased">{link.text}</p>
                                    </Link>
                                </li>
                   })
               } 
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