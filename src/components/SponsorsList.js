import React from "react";

const Sponsors = [
    "Hewlett Packard(Hp)",
    "Asus",
    "Dell",
    "Microsoft"
]

const SponsorsList = () => {
    return (
        <div>
            <p className="p-2 text-center lg:text-2xl font-bold">Sponsors</p>
            <div className="p-5 lg:w-full flex flex-wrap justify-center">    
            {
                Sponsors.map((Sponsor, i) => {
                    return (
                        <div className="p-10 lg:w-1/5 bg-gray-400 m-2 text-gray-500 lg:text-xl font-extrabold hover:bg-gray-300 rounded-xl hover:text-black">{Sponsor}</div>
                    )
                })
            }
        </div>
        </div>

    )
}

export default SponsorsList;