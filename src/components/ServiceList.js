import React from "react";
import Services from "./Services"

const ServiceList = ({data}) => {
    return (
        <div className="h-screen">
            <p className="transition-1000 text-center mb-4 font-bold lg:font-extrabold text-3xl antialiased">SERVICES</p>   
            <div className="flex flex-wrap flex-row justify-center lg:flex-row flex-wrap ma-3">
                {
                data.map((services, i) => {
                    return(<Services key={i}
                            id={data[i].id}
                            svg={data[i].svg} 
                            service={data[i].Service} 
                            text={data[i].text} />)
                })
            }
            </div>    
        </div>
    )
}

export default ServiceList;