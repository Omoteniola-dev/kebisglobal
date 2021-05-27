import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
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
               {
                   navLinks.map((link, i) => {
                       return <li key={i} className="py-5 px-5 hover:text-blue-300 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent text-blue-700">
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