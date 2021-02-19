import React from 'react';

const Testimonial = ({user,image, message}) => {
    return (
        <div className="card">
            <div className="card-header">
                <img className="img" alt="Per" src={image}/>
                <p>{user}</p>
                <p style={{color: "hsl(333, 80%, 67%)"}}>Verified Buyer</p>
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