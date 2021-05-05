import React, { Component } from "react";
import Header from "../components/Hero/Header";
import AboutSection from "../components/AboutSection/AboutSection";
import ServiceList from "../components/Services/ServiceList";
import SponsorsList from "../components/SponsorsList";
import TestimonialList from "../components/TestimonialPage/TestimonialList";
import web from "../images/web-programming.svg";
import app from "../images/app-design.svg";
import office from "../images/office.svg";
import training from "../images/training.svg"
import anne from '../images/image-anne.jpg';
import colton from '../images/image-colton.jpg';
import irene from '../images/image-irene.jpg';

class Home extends Component {
    constructor(){
        super()
        this.state = {
          Services: [
            {
            "id": 1,
            "svg": web, 
            "Service": "Web design and development",
            "text": "We build high performing and scalable web applications to meet your requirements."
          },
          {
            "id":2,
            "svg": app,
            "Service": "Hardware",
            "text": "We provide sales of all kinds of computer hardware. From regular desktop computers of different configuration, notebooks and laptops,monitors, combo printers and servers for all levels of users."
          },
          {
            "id": 3,
            "svg": office,
            "Service": "Business Process Automation",
            "text": "We have specialised IT professionals that use low-code Microsoft based applications tools to automate processes that exists in a business setting."
          },
          {
            "id": 4,
            "svg": training,
            "Service": "ICT training",
            "text": "We offer ICT training in Microsoft 365 User and Administrator, SharePoint administrator, Power apps administrator, windows server administrator."
          }
          ],
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
        }
      }
      render() {
          const { Services, users } = this.state;
          return(
            <div className="relative">
                <div>
                <Header />
                </div>
                <SponsorsList />
                <AboutSection />
                  
                <div>
                <ServiceList data={Services}/>
                </div>
                <p className="mt-4 lg:text-2xl text-3xl font-bold tracking-wider text-center">Testimonials</p>
                <TestimonialList data={users}/>
            </div>
    )
      }
    
}

export default Home;