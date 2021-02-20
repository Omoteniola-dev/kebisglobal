import React from 'react';

const Rating = ({name}) => {
    return (
            <div>
                <span className="rate">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </span>
                    
                {
                    <span>Rated 5 Stars in {name}</span>
                }

            </div> 
    );
}

export default Rating;