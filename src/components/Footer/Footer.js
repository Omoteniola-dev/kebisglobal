import React from "react";
import Cta from "./Cta";
import { Link } from "react-router-dom";
import { navLinks } from "../Navbar/Navbar"

const Footer = () => {
    return( 
            <footer className="mt-10 lg:h-screen mb-20 p-4">
                <div className='w-auto'>
                    <Cta />
                    <div className="mx-10 p-10 flex flex-wrap justify-center lg:justify-between p-2">
                        <ul>
                            <p className='text-lg'>Sitemap</p>
                            {
                                navLinks.map((link, i) => {
                                    return <li key={i} className="p-3 hover:text-blue-300 transition duration-200 hover:bg-gray-800 sm:hover:bg-transparent text-blue-700">
                                                 <Link to={link.link}>
                                                     <p className="antialiased">{link.text}</p>
                                                 </Link>
                                             </li>
                                })
                            }
                        </ul>
                        <div className="">
                            <img src="" alt="company logo" className="p-5"/>
                            <p className="p-2">72, Victoria Street. Ogudu-Ojota, Lagos. Nigeria</p>
                            <p className="p-2">xxx-xxx-xxx</p>
                            <p className="p-2">Kebisglobal@gmail.com</p>
                        </div>
                    </div>
                    </div>
                <p className="text-center text-sm lg:text-base">2021 Copyright &copy; Kebisglobal. Built by <a className="text-blue-600" target="_blank"
                rel="noreferrer" href="https://twitter.com/Omoteniola_dev">Omoteniola-dev</a></p>
                
            </footer>
    )
}

export default Footer;