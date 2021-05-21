import React from "react";

const Sponsors = [
    "Hewlett Packard(Hp)",
    "Asus",
    "Dell",
    "Microsoft"
]

const SponsorsList = () => {
    return (
        <div className="mt-32 p-6">
            <div className="p-3 lg:w-full flex flex-wrap justify-center">    
            {
                Sponsors.map((Sponsor, i) => {
                    return (
                        <div className="p-10 w-full text-center lg:w-1/5 text-gray-500 lg:text-xl font-extrabold rounded-xl hover:text-black" key={i}>{Sponsor}</div>
                    )
                })
            }
        </div>
        </div>

    )
}

export default SponsorsList;