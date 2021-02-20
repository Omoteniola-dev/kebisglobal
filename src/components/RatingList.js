import React from 'react';
import Rating from './Rating';

const RatingList = ({name}) =>{
    return (
        <div className="rating">
        {
            name.map((rater, i) => {
                return (<Rating key={i} name = {rater}/>)
                })
        
        }
        </div>
    )
    
}
    
    

export default RatingList;