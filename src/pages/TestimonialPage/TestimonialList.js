import React from 'react';
import Testimonial from './Testimonial';

const TestimonialList = ({data}) => {
    return (
        <div className="testimonials mt-10">
        {
            data.map((user, i) => {
                return(<Testimonial key={i} 
                user={data[i].name}
                image = {data[i].image}
                message={data[i].message} />)
            })
        }     
            
        </div>
    )

}

export default TestimonialList;