import React from 'react';

const Testimonial = ({user,image, message}) => {
    return (
        <div className="card">
            <div className="mb-4">
                <img className="img" alt="Per" src={image}/>
                <p className="font-bold text-black text-xl">{user}</p>
                <p className="text-blue-200">Verified Buyer</p>
            </div>
            <div>
                {
                    <p>{message}</p>
                }
            </div>
        </div>
    )
}
export default Testimonial;