import React from "react";
import { Link } from "react-router-dom";
import about from "../images/about.png"

const AboutSection = () => {
    return (
        <div>
            <p className="font-bold text-2xl lg:text-3xl text-center p-2">ABOUT US</p>
            <div className="flex flex-wrap p-2">
                <img className="lg:w-1/3 h-auto shadow-xl rounded-xl" src={about} alt="about"/>
                <p className="lg:w-2/3 p-4 font-base">We are a team of professionals aimed at providing cutting-edge tech solutions for businesses to help
                increase their productivity, efficiency and ultimately, their revenue. We pride ourselves in providing excellent customer experience
                and hitch-free development.
                Click the read more button to know more about us.<br/>
                <Link to="./AboutPage">
                    <button className="p-2 m-3 bg-blue-500 font-base text-xl hover:bg-blue-600">READ MORE</button>
                </Link>
                
            </p>
            </div>
            
        </div>
    )
}
export default AboutSection;