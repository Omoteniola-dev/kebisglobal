import React from "react";
import { Link } from "react-router-dom";
import about from "../../images/about.png"

const AboutSection = () => {
    return (
        <div className="lg:w-4/5 lg:ml-32 m-8">
            <p className="font-bold text-2xl lg:text-3xl text-center p-2">ABOUT US</p>
            <div className="flex flex-wrap p-2">
                <img className="lg:w-1/3 h-auto shadow-xl rounded-xl" src={about} alt="about"/>
                <p className="lg:w-2/4 p-4 pl-8 font-base">We are a team of professionals aimed at providing cutting-edge tech solutions for businesses to help
                increase their productivity, efficiency and ultimately, their revenue. We pride ourselves in providing excellent customer experience
                and hitch-free development.
                Click the read more button to know more about us.<br/>
                <Link to="./AboutPage">
                    <button className="lg:p-4 p-4 lg:px-8 lg:mt-10 bg-blue-500 font-bold lg:text-xl m-4 hover:bg-blue-600 rounded-xl">READ MORE...</button>
                </Link>
                
            </p>
            </div>
            
        </div>
    )
}
export default AboutSection;