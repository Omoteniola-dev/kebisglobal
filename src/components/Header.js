import React from "react";

const Header = () => {
    return (
        <div className="h-screen pt-4 m-12 lg:m-14">
            <div className="font-bold text-left mt-10 w-2/3 leading-normal lg:m-0 lg:font-extrabold lg:w-1/3 lg:leading-snug">
            <p className="py-12 lg:py-14 text-4xl text-black-900 text-center leading-snug">Better IT solutions for your business</p>
            <p className="text-sm m-2 text-gray-900 w-4/5 lg:w-auto">We are a team of seasoned IT professionals creating cutting edge solutions.</p>
            </div>
        </div>
        
    )
}

export default Header;