import { Component } from 'react';
import './Testimonialpage.css';
import RatingList from '../Rating/RatingList';
import TestimonialList from './TestimonialList';
import anne from '../../images/image-anne.jpg';
import colton from '../../images/image-colton.jpg';
import irene from '../../images/image-irene.jpg';

class Testimonialpage extends Component {
  constructor(){
    super()
    this.state = {
      raters: ["Reviews", "Report guru", "Best Tech"],
      users: [
         {
           'id': 1,
           'image': colton,
          'name': "Colton Smith",
          'message': "We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!"
        },
        {
          'id': 2,
          'image': irene,
          'name': "Irene Roberts",
          'message': "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
        },
        {
          'id': 3,
          'image': anne,
          'name': "Anne Wallace",
          'message': "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
        }
      ]
    };
  }

  render() {
    const { raters, users} = this.state
    return (
      <div className="m-10 pt-4 lg:pt-8 lg:m-18 ">
        <div className="top">
          <div className="span">
            <p>10,000+ of our users love our service</p>
    
            <p className="text">We only provide great products combined with excellent customer service.
              See what our satisfied customers are saying about our services.</p>
          </div>
          <div><RatingList name={raters}/></div>
        </div>
          <div>
            <TestimonialList data={users}/>
          </div>
      </div>
      
    );
  }
 }


  

export default Testimonialpage;
