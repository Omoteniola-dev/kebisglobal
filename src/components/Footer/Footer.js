import React from "react";
import Cta from "./Cta";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div> 
        <footer className="bg-blue-100 p-4">
            <div className='w-auto'>
                <Cta />
            <div className="flex flex-wrap justify-center lg:justify-between p-2">
                 <ul>
                    <p className='text-xl'>Sitemap</p>
                    <Link to="/AboutPage">
                        <li>About Us</li>
                    </Link>
                    <Link to="/Testimonialpage">
                        <li>Testimonials</li>
                    </Link>
                    <Link to="/Contactpage">
                        <li>Contact us</li>
                    </Link>
                 </ul>
                 <div className="jus">
                     <img src="" alt="Company Logo" />
                     <p>Location: 72, Victoria Street. Ogudu-Ojota, Lagos. Nigeria</p>
                     <p>Tel: xxx-xxx-xxx</p>
                     <p>Mail: Kebisglobal@gmail.com</p>
                 </div>
             </div>
            </div>
             <p className="text-center text-sm lg:text-base">2021 Copyright &copy; Kebisglobal. Built by <a className="text-blue-600" target="_blank"
             rel="noreferrer" href="https://twitter.com/Omoteniola_dev">Omoteniola-dev</a></p>
             
        </footer>
        </div>
       
    )
}

export default Footer;