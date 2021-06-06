import React from "react";
import { Link } from "react-router-dom";

const arr = [
    {"text": "Request a quote", "href": "/"},
    {"text": "Contact us", "href": "/contact"}
]
const Header = () => {
    return (
        <div className="h-screen pt-4 m-10 lg:m-14">
            <div className="lg:font-bold text-left mt-8 w-full leading-normal 
            lg:m-0 lg:font-extrabold lg:w-2/3 lg:leading-snug">
            <p className="sm:py-8 text-4xl font-bold text-black-900 text-center leading-snug" 
            style={{"fontSize":"40px", "fontWeight":"bolder"}}> 
            Better <small style={{"color":"blue"}}>IT solutions</small> for your business</p>
            <p className="text-sm text-gray-500 w-full lg:w-auto">We are a team of seasoned IT professionals creating cutting edge solutions.</p>
            <div className="flex flex-wrap lg:flex-wrap lg:w-full ">
                    {  
                        arr.map((a, i) => {
                            return(
                                <div key={i} className="bg-blue-400 m-2 w-3/4 lg:m-5 p-3 lg:p-3 lg:w-1/4 lg:mt-8 text-center rounded-lg hover:bg-blue-500">
                                    <Link to={a.href}>
                                        <p className="antialiased">{a.text}</p>
                                    </Link>
                                </div>
                                
                            )
                        })
                    }
            </div>
            </div>
        </div>
        
    )
}

export default Header;