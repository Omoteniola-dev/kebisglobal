import React from "react";
const Services = ({id, text, svg, service}) => {
    return (
        <div className="m-10 p-10 ma-5 mb-4 w-4/5 h-auto shadow-lg lg:w-2/5 h-auto mb-4 ml-8 bg-gray-100 justify-center lg:shadow-xl rounded-xl">
            <img style={{width: '100px', height: '100px'}} alt="svg" src={svg}/>
            <p className="font-bold text-lg text-gray-900 text-center">{service}</p>   
            <p className="font-light text-base">{text}</p>
        </div>
    )
}

export default Services;